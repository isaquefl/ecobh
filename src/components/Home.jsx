import { SectionTitle } from './SectionTitle';

const stats = [
  ['13', 'tipos de descarte mapeados'],
  ['100%', 'sem chave privada no front-end'],
  ['BH', 'foco em utilidade pública local']
];

const benefits = [
  ['Mapa inteligente', 'Busca por bairro, localização aproximada e rota para pontos de descarte.'],
  ['Educação simples', 'Orientações rápidas para separar, armazenar e descartar cada material.'],
  ['Impacto social', 'Projeto acadêmico com proposta prática para moradores, catadores e comunidade.']
];

export function Home({ onNavigate }) {
  return (
    <>
      <section className="hero" id="inicio">
        <div className="hero-copy">
          <span className="eyebrow">EcoBH — Conectando pessoas ao descarte correto</span>
          <h1>Encontre pontos de coleta e descarte corretamente em Belo Horizonte.</h1>
          <p>
            Uma plataforma web moderna para orientar moradores de BH sobre reciclagem, doação,
            logística reversa e descarte responsável de materiais do dia a dia.
          </p>

          <div className="hero-actions">
            <button className="primary-button" onClick={() => onNavigate('mapa')}>Encontrar pontos</button>
            <button className="secondary-button" onClick={() => onNavigate('categorias')}>Como descartar</button>
          </div>

          <div className="hero-stats" aria-label="Indicadores do projeto">
            {stats.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-product" aria-label="Prévia do produto EcoBH">
          <div className="phone-shell">
            <div className="phone-map">
              <span className="map-line one" />
              <span className="map-line two" />
              <span className="map-line three" />
              <span className="map-pin pin-a" />
              <span className="map-pin pin-b" />
              <span className="map-pin pin-c" />
            </div>
            <div className="mini-card">
              <strong>3 pontos próximos</strong>
              <span>Centro, Savassi e Santa Efigênia</span>
            </div>
          </div>
          <div className="impact-card">
            <span>Impacto esperado</span>
            <strong>menos descarte irregular, mais informação e participação comunitária.</strong>
          </div>
        </div>
      </section>

      <section className="benefit-strip">
        {benefits.map(([title, text]) => (
          <article key={title}>
            <span aria-hidden="true" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="split-section">
        <div>
          <SectionTitle
            eyebrow="O problema"
            title="Descartar errado ainda é fácil demais."
            description="Quando falta informação acessível, eletrônicos, óleo, móveis e recicláveis acabam em locais inadequados, aumentando poluição, risco sanitário e custos urbanos."
          />
        </div>
        <div className="problem-grid">
          <article>
            <strong>Solo e água</strong>
            <p>Pilhas, baterias e óleo podem contaminar recursos naturais quando descartados sem controle.</p>
          </article>
          <article>
            <strong>Baixa adesão</strong>
            <p>Muitas pessoas querem descartar corretamente, mas não sabem onde ir ou que material separar.</p>
          </article>
          <article>
            <strong>Desperdício</strong>
            <p>Materiais reaproveitáveis perdem valor quando chegam misturados ao lixo comum.</p>
          </article>
        </div>
      </section>

      <section className="solution-band">
        <SectionTitle
          align="center"
          eyebrow="A solução EcoBH"
          title="Tecnologia simples para uma cidade mais limpa."
          description="O EcoBH combina mapa, dados públicos, fallback local e educação ambiental para transformar informação em ação cotidiana."
        />
        <button className="primary-button" onClick={() => onNavigate('projeto')}>Ver proposta acadêmica</button>
      </section>
    </>
  );
}
