const BH_CENTER = { lat: -19.916681, lng: -43.934493 };

export function distanceInKm(origin, destination) {
  if (!origin || !destination) return null;

  const earthRadius = 6371;
  const dLat = toRadians(destination.lat - origin.lat);
  const dLng = toRadians(destination.lng - origin.lng);
  const lat1 = toRadians(origin.lat);
  const lat2 = toRadians(destination.lat);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.sin(dLng / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);

  return earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function formatDistance(distance) {
  if (distance === null || Number.isNaN(distance)) return 'Distância indisponível';
  if (distance < 1) return `${Math.round(distance * 1000)} m`;
  return `${distance.toFixed(1).replace('.', ',')} km`;
}

export function routeUrl(point) {
  return `https://www.google.com/maps/dir/?api=1&destination=${point.lat},${point.lng}`;
}

export function osmRouteUrl(point) {
  return `https://www.openstreetmap.org/directions?to=${point.lat}%2C${point.lng}`;
}

export function getBhCenter() {
  return BH_CENTER;
}

function toRadians(value) {
  return (value * Math.PI) / 180;
}
