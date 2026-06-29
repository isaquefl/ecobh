import { SectionTitle } from './SectionTitle';

const stats = [
  ['13', 'tipos de material com guia de descarte'],
  ['Tempo real', 'pontos do OpenStreetMap atualizados ao vivo'],
  ['100% grátis', 'sem cadastro, sem custo, para qualquer pessoa']
];

const benefits = [
  ['Mapa de pontos reais', 'Busque por bairro, use sua localização e abra a rota direto no app de mapas.'],
  ['Guia de descarte', 'Como separar, armazenar e onde levar cada material, sem complicação.'],
  ['Feito com a comunidade', 'Você sugere pontos novos e correções; a gente revisa e coloca no mapa.']
];

export function Home({ onNavigate }) {
  return (
    <>
      <section className="hero" id="inicio">
        <div className="hero-copy">
          <span className="eyebrow">Descarte correto em Belo Horizonte</span>
          <h1>Saiba <em>onde</em> e <em>como</em> descartar cada material.</h1>
          <p>
            Um guia prático para moradores de BH: encontre o ponto de coleta mais próximo
            e aprenda a separar recicláveis, eletrônicos, óleo e outros resíduos do dia a dia.
          </p>

          <div className="hero-actions">
            <button className="primary-button" onClick={() => onNavigate('mapa')}>Encontrar pontos</button>
            <button className="secondary-button" onClick={() => onNavigate('categorias')}>Como descartar</button>
          </div>

          <div className="hero-stats" aria-label="Destaques do EcoBH">
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
            <span>Por que importa</span>
            <strong>menos descarte irregular, mais reciclagem e renda para quem cuida da cidade.</strong>
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

      <section className="steps-section">
        <SectionTitle
          align="center"
          eyebrow="Como funciona"
          title="Descarte certo em 3 passos"
          description="Sem cadastro e sem complicação — do celular ou do computador."
        />
        <div className="steps-grid">
          <article className="step-card">
            <span className="step-num">1</span>
            <h3>Busque</h3>
            <p>Use sua localização ou pesquise por bairro para ver os pontos de coleta perto de você.</p>
          </article>
          <article className="step-card">
            <span className="step-num">2</span>
            <h3>Filtre o material</h3>
            <p>Escolha o que vai descartar — eletrônico, óleo, vidro, roupas — e veja só os locais que aceitam.</p>
          </article>
          <article className="step-card">
            <span className="step-num">3</span>
            <h3>Vá com a rota pronta</h3>
            <p>Abra a rota direto no Google Maps ou OpenStreetMap e leve seu material ao lugar certo.</p>
          </article>
        </div>
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
          description="O EcoBH combina mapa, dados públicos em tempo real e educação ambiental para transformar informação em ação no dia a dia."
        />
        <button className="primary-button" onClick={() => onNavigate('projeto')}>Conhecer o EcoBH</button>
      </section>
    </>
  );
}
