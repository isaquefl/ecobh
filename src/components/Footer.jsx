export function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div>
        <strong>EcoBH</strong>
        <p>Conectando pessoas ao descarte correto em Belo Horizonte.</p>
      </div>
      <div>
        {['mapa', 'categorias', 'educacao', 'projeto', 'contato'].map((item) => (
          <button key={item} onClick={() => onNavigate(item)}>
            {item}
          </button>
        ))}
      </div>
    </footer>
  );
}
