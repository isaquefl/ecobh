const footerLinks = [
  { id: 'mapa', label: 'Mapa interativo' },
  { id: 'categorias', label: 'Guia de descarte' },
  { id: 'educacao', label: 'Educação ambiental' },
  { id: 'projeto', label: 'Sobre o EcoBH' },
  { id: 'contato', label: 'Contribuir' }
];

export function Footer({ onNavigate }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-brand">
        <span className="footer-mark" aria-hidden="true">E</span>
        <div>
          <strong>EcoBH</strong>
          <p>Conectando pessoas ao descarte correto em Belo Horizonte.</p>
        </div>
      </div>

      <nav className="footer-nav" aria-label="Links do rodapé">
        <span className="footer-heading">Navegar</span>
        {footerLinks.map((item) => (
          <button key={item.id} onClick={() => onNavigate(item.id)}>
            {item.label}
          </button>
        ))}
      </nav>

      <p className="footer-legal">
        © {year} EcoBH · Dados de pontos via OpenStreetMap · Feito em Belo Horizonte 💚
      </p>
    </footer>
  );
}
