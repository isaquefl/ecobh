import { materialLabels } from '../data/categories';
import { formatDistance, osmRouteUrl, routeUrl } from '../utils/geo';

export function PointCard({ point, distance }) {
  return (
    <article className="point-card">
      <div className="point-card-top">
        <div>
          <span className="source-chip">{point.source}</span>
          <h3>{point.name}</h3>
        </div>
        <strong>{formatDistance(distance)}</strong>
      </div>
      <p>{point.description}</p>
      <dl>
        <div>
          <dt>Endereço</dt>
          <dd>{point.address} · {point.neighborhood}</dd>
        </div>
        <div>
          <dt>Horário</dt>
          <dd>{point.hours}</dd>
        </div>
      </dl>
      <div className="tag-list">
        {point.materials.slice(0, 5).map((material) => (
          <span key={material}>{materialLabels[material] || material}</span>
        ))}
        {point.materials.length > 5 && (
          <span className="tag-more">+{point.materials.length - 5}</span>
        )}
      </div>
      <div className="card-actions">
        <a href={routeUrl(point)} target="_blank" rel="noreferrer">Google Maps</a>
        <a href={osmRouteUrl(point)} target="_blank" rel="noreferrer">OpenStreetMap</a>
      </div>
    </article>
  );
}
