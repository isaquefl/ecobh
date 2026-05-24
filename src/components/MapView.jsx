import { useEffect, useMemo, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { materialOptions } from '../data/categories';
import { localCollectionPoints } from '../data/collectionPoints';
import { fetchPublicCollectionPoints, searchAddress } from '../services/geoApi';
import { distanceInKm, getBhCenter } from '../utils/geo';
import { PointCard } from './PointCard';
import { SectionTitle } from './SectionTitle';

export function MapView() {
  const [points, setPoints] = useState(localCollectionPoints);
  const [activeMaterial, setActiveMaterial] = useState('all');
  const [search, setSearch] = useState('');
  const [center, setCenter] = useState(getBhCenter());
  const [userLocation, setUserLocation] = useState(null);
  const [status, setStatus] = useState('Carregando dados públicos e fallback local...');
  const [locationRequested, setLocationRequested] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const mapRef = useRef(null);
  const layerRef = useRef([]);

  const filteredPoints = useMemo(() => {
    return points
      .filter((point) => activeMaterial === 'all' || point.materials.includes(activeMaterial))
      .map((point) => ({
        ...point,
        distance: distanceInKm(userLocation || center, point)
      }))
      .sort((a, b) => (a.distance || 999) - (b.distance || 999));
  }, [activeMaterial, center, points, userLocation]);

  useEffect(() => {
    let active = true;
    fetchPublicCollectionPoints()
      .then((publicPoints) => {
        if (!active) return;
        setPoints(publicPoints);
        setStatus('Dados públicos carregados com fallback local ativo.');
      })
      .catch(() => {
        if (!active) return;
        setStatus('API externa indisponível. Exibindo base local demonstrativa.');
      })
      .finally(() => active && setIsLoading(false));

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (locationRequested || userLocation) return;

    const timer = window.setTimeout(() => {
      requestApproxLocation('auto');
    }, 800);

    return () => window.clearTimeout(timer);
  }, [locationRequested, userLocation]);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('ecobh-map', {
        center: [center.lat, center.lng],
        zoom: 12,
        scrollWheelZoom: false
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(mapRef.current);
    }

    mapRef.current.setView([center.lat, center.lng], 12);
  }, [center]);

  useEffect(() => {
    if (!mapRef.current) return;

    layerRef.current.forEach((layer) => layer.remove());
    layerRef.current = [];

    filteredPoints.forEach((point) => {
      const marker = L.marker([point.lat, point.lng], {
        icon: L.divIcon({
          className: 'eco-marker',
          html: '<span></span>',
          iconSize: [24, 24],
          iconAnchor: [12, 24]
        })
      }).addTo(mapRef.current);

      marker.bindPopup(`<strong>${point.name}</strong><br>${point.address}<br>${point.neighborhood}`);
      layerRef.current.push(marker);
    });

    if (userLocation) {
      const locationMarker = L.circleMarker([userLocation.lat, userLocation.lng], {
        radius: 9,
        color: '#2563eb',
        fillColor: '#38bdf8',
        fillOpacity: 0.85,
        weight: 3
      }).addTo(mapRef.current);
      locationMarker.bindPopup('Sua localização aproximada');
      layerRef.current.push(locationMarker);
    }
  }, [filteredPoints, userLocation]);

  async function handleSearch(event) {
    event.preventDefault();
    setStatus('Buscando endereço em Belo Horizonte...');
    try {
      const result = await searchAddress(search);
      setCenter({ lat: result.lat, lng: result.lng });
      setUserLocation({ lat: result.lat, lng: result.lng });
      setStatus(`Busca encontrada: ${result.label}`);
    } catch (error) {
      setStatus(error.message);
    }
  }

  function requestApproxLocation(mode = 'manual') {
    setLocationRequested(true);

    if (!navigator.geolocation) {
      setStatus('Geolocalização não está disponível neste navegador.');
      return;
    }

    setStatus(
      mode === 'auto'
        ? 'O EcoBH está pedindo sua localização para ordenar os pontos mais próximos.'
        : 'Solicitando sua localização aproximada...'
    );

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        setUserLocation(location);
        setCenter(location);
        setStatus('Localização aproximada aplicada ao mapa.');
      },
      () => setStatus('Localização não autorizada ou indisponível. Você ainda pode buscar por bairro ou endereço.'),
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 60000 }
    );
  }

  function handleUseLocation() {
    requestApproxLocation('manual');
  }

  return (
    <section className="map-page" id="mapa">
      <SectionTitle
        eyebrow="Mapa interativo"
        title="Pontos de coleta e descarte responsável em Belo Horizonte"
        description="Filtre por material, pesquise por bairro ou endereço e abra a rota no seu aplicativo de mapas."
      />

      <div className="map-layout">
        <aside className="map-sidebar" aria-label="Filtros de busca">
          <form onSubmit={handleSearch} className="search-form">
            <label htmlFor="address-search">Buscar endereço ou bairro</label>
            <div>
              <input
                id="address-search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Ex.: Savassi, Pampulha, Centro"
              />
              <button type="submit">Buscar</button>
            </div>
          </form>

          <div className="location-consent">
            <strong>Encontre locais próximos</strong>
            <p>Permita a localização para o EcoBH calcular distâncias e priorizar pontos perto de você.</p>
            <button className="location-button" onClick={handleUseLocation}>Permitir localização</button>
          </div>

          <div className="filter-group">
            <span>Filtrar material</span>
            <div className="material-grid">
              {materialOptions.map((option) => (
                <button
                  key={option.value}
                  className={activeMaterial === option.value ? 'selected' : ''}
                  onClick={() => setActiveMaterial(option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <p className={`map-status ${isLoading ? 'loading' : ''}`}>{status}</p>
        </aside>

        <div className="map-canvas-wrap">
          <div id="ecobh-map" className="map-canvas" aria-label="Mapa de pontos de coleta" />
        </div>
      </div>

      <div className="results-header">
        <h3>{filteredPoints.length} locais encontrados</h3>
        <p>Dados locais são demonstrativos e devem ser revisados antes de uso oficial.</p>
      </div>

      <div className="points-grid">
        {filteredPoints.map((point) => (
          <PointCard key={point.id} point={point} distance={point.distance} />
        ))}
      </div>
    </section>
  );
}
