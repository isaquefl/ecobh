import { localCollectionPoints } from '../data/collectionPoints';

const BH_CENTER = { lat: -19.916681, lng: -43.934493 };

// Mais de um servidor Overpass para resiliência (se um cair, tenta o próximo).
const OVERPASS_ENDPOINTS = [
  'https://overpass-api.de/api/interpreter',
  'https://overpass.kumi.systems/api/interpreter'
];

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
  // Cobre toda a região de BH e arredores e busca vários tipos de descarte real.
  const box = `${BH_CENTER.lat - 0.22},${BH_CENTER.lng - 0.26},${BH_CENTER.lat + 0.22},${BH_CENTER.lng + 0.26}`;
  const query = `
    [out:json][timeout:25];
    (
      node["amenity"="recycling"](${box});
      way["amenity"="recycling"](${box});
      relation["amenity"="recycling"](${box});
      node["amenity"="waste_disposal"](${box});
      way["amenity"="waste_disposal"](${box});
      node["amenity"="waste_transfer_station"](${box});
      node["shop"="charity"](${box});
      node["shop"="second_hand"](${box});
    );
    out center tags;
  `;

  const json = await queryOverpass(query);
  const points = (json.elements || [])
    .filter((item) => item.tags && (item.lat || item.center?.lat))
    .map((item) => mapOverpassItem(item))
    .filter((point) => point.materials.length > 0)
    .slice(0, 80);

  return mergePoints(localCollectionPoints, points);
}

async function queryOverpass(query) {
  let lastError;
  for (const endpoint of OVERPASS_ENDPOINTS) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: query,
        headers: { 'Content-Type': 'text/plain;charset=UTF-8' }
      });
      if (response.ok) return response.json();
      lastError = new Error('Overpass API indisponível.');
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error('Overpass API indisponível.');
}

function mapOverpassItem(item) {
  const tags = item.tags || {};
  const materials = inferMaterials(tags);
  const street = tags['addr:street'];
  const number = tags['addr:housenumber'];
  const neighborhood = tags['addr:suburb'] || tags['addr:neighbourhood'] || tags['addr:city_block'] || 'Belo Horizonte';

  return {
    id: `osm-${item.type}-${item.id}`,
    name: tags.name || tags.operator || pointKindLabel(tags),
    address: street ? `${street}${number ? `, ${number}` : ''}` : 'Localização disponível no mapa',
    neighborhood,
    lat: item.lat || item.center.lat,
    lng: item.lon || item.center.lon,
    materials,
    hours: tags.opening_hours || 'Confirme o funcionamento antes de ir',
    description: pointDescription(tags),
    source: 'OpenStreetMap'
  };
}

function pointKindLabel(tags) {
  if (tags.amenity === 'waste_disposal' || tags.amenity === 'waste_transfer_station') return 'Ponto de descarte';
  if (tags.shop === 'charity' || tags.shop === 'second_hand') return 'Ponto de doação / reúso';
  return 'Ponto de reciclagem';
}

function pointDescription(tags) {
  if (tags.shop === 'charity' || tags.shop === 'second_hand') {
    return 'Recebe doações e materiais para reúso. Confirme os itens aceitos antes de levar.';
  }
  return 'Ponto público de coleta mapeado na base aberta do OpenStreetMap. Confirme horários e materiais aceitos.';
}

function inferMaterials(tags) {
  const materials = new Set();
  const blob = `${Object.keys(tags).join(' ')} ${Object.values(tags).join(' ')}`.toLowerCase();

  if (blob.includes('elect') || blob.includes('computer')) materials.add('eletronico');
  if (blob.includes('battery') || blob.includes('batteries')) materials.add('baterias');
  if (blob.includes('paper') || blob.includes('cardboard')) materials.add('papelao');
  if (blob.includes('plastic')) materials.add('plastico');
  if (blob.includes('glass')) materials.add('vidro');
  if (blob.includes('metal') || blob.includes('aluminium') || blob.includes('cans') || blob.includes('scrap_metal')) materials.add('latinha');
  if (blob.includes('oil')) materials.add('oleo');
  if (blob.includes('clothes') || blob.includes('textile') || blob.includes('shoes')) materials.add('roupas');
  if (blob.includes('scrap')) materials.add('ferro');
  if (tags.shop === 'charity' || tags.shop === 'second_hand') {
    materials.add('roupas');
    materials.add('moveis');
  }

  // Pontos genéricos de reciclagem aceitam os secos mais comuns.
  if (!materials.size && (tags.amenity === 'recycling')) {
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
