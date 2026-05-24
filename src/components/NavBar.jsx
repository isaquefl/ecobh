const navItems = [
  { id: 'inicio', label: 'Início' },
  { id: 'mapa', label: 'Mapa' },
  { id: 'categorias', label: 'Categorias' },
  { id: 'educacao', label: 'Educação' },
  { id: 'projeto', label: 'Projeto' },
  { id: 'contato', label: 'Contribuir' }
];

export function NavBar({ activeView, onNavigate }) {
  return (
    <header className="topbar">
      <button className="brand" onClick={() => onNavigate('inicio')} aria-label="Voltar para o início">
        <span className="brand-mark">E</span>
        <span>
          <strong>EcoBH</strong>
          <small>Estácio | Sustentabilidade</small>
        </span>
      </button>

      <nav className="nav-links" aria-label="Navegação principal">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={activeView === item.id ? 'active' : ''}
            onClick={() => onNavigate(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
