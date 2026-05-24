import { localCollectionPoints } from '../data/collectionPoints';

const BH_CENTER = { lat: -19.916681, lng: -43.934493 };

export async function searchAddress(query) {
  if (!query || query.trim().length < 3) {
    throw new Error('Digite ao menos 3 caracteres para buscar.');
  }

  const params = new URLSearchParams({
    format: 'json',
    limit: '1',
    addressdetails: '1',
    countrycodes: 'br',
    q: `${query}, Belo Horizonte, Minas Gerais, Brasil`
  });

  const response = await fetch(`https://nominatim.openstreetmap.org/search?${params.toString()}`, {
    headers: { Accept: 'application/json' }
  });

  if (!response.ok) throw new Error('Não foi possível buscar o endereço.');

  const data = await response.json();
  if (!data.length) throw new Error('Endereço não encontrado em Belo Horizonte.');

  return {
    lat: Number(data[0].lat),
    lng: Number(data[0].lon),
    label: data[0].display_name
  };
}

export async function fetchPublicCollectionPoints() {
  const box = `${BH_CENTER.lat - 0.18},${BH_CENTER.lng - 0.2},${BH_CENTER.lat + 0.18},${BH_CENTER.lng + 0.2}`;
  const query = `
    [out:json][timeout:18];
    (
      node["amenity"="recycling"](${box});
      way["amenity"="recycling"](${box});
      relation["amenity"="recycling"](${box});
      node["recycling_type"](${box});
      way["recycling_type"](${box});
    );
    out center tags;
  `;

  const response = await fetch('https://overpass-api.de/api/interpreter', {
    method: 'POST',
    body: query,
    headers: { 'Content-Type': 'text/plain;charset=UTF-8' }
  });

  if (!response.ok) throw new Error('Overpass API indisponível.');

  const json = await response.json();
  const points = (json.elements || [])
    .filter((item) => item.tags && (item.lat || item.center?.lat))
    .slice(0, 18)
    .map((item) => mapOverpassItem(item));

  return mergePoints(localCollectionPoints, points);
}

function mapOverpassItem(item) {
  const tags = item.tags || {};
  const materials = inferMaterials(tags);
  const street = tags['addr:street'];
  const number = tags['addr:housenumber'];
  const neighborhood = tags['addr:suburb'] || tags['addr:neighbourhood'] || 'Belo Horizonte';

  return {
    id: `osm-${item.type}-${item.id}`,
    name: tags.name || 'Ponto público de reciclagem',
    address: street ? `${street}${number ? `, ${number}` : ''}` : 'Endereço disponível no mapa',
    neighborhood,
    lat: item.lat || item.center.lat,
    lng: item.lon || item.center.lon,
    materials,
    hours: tags.opening_hours || 'Verificar funcionamento antes de ir',
    description: 'Ponto público encontrado via OpenStreetMap/Overpass API. Confirme as informações antes do uso oficial.',
    source: 'OpenStreetMap'
  };
}

function inferMaterials(tags) {
  const materials = new Set();
  const keys = Object.keys(tags);
  const blob = `${keys.join(' ')} ${Object.values(tags).join(' ')}`.toLowerCase();

  if (blob.includes('elect') || blob.includes('computer')) materials.add('eletronico');
  if (blob.includes('battery') || blob.includes('batteries')) materials.add('baterias');
  if (blob.includes('paper') || blob.includes('cardboard')) materials.add('papelao');
  if (blob.includes('plastic')) materials.add('plastico');
  if (blob.includes('glass')) materials.add('vidro');
  if (blob.includes('metal') || blob.includes('aluminium') || blob.includes('cans')) materials.add('latinha');
  if (blob.includes('oil')) materials.add('oleo');
  if (blob.includes('clothes') || blob.includes('textile')) materials.add('roupas');
  if (blob.includes('scrap')) materials.add('ferro');

  if (!materials.size) {
    materials.add('coleta-seletiva');
    materials.add('papelao');
    materials.add('plastico');
  }

  return Array.from(materials);
}

function mergePoints(localPoints, apiPoints) {
  const unique = new Map();
  [...localPoints, ...apiPoints].forEach((point) => unique.set(point.id, point));
  return Array.from(unique.values());
}
