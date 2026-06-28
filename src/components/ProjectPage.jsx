import { SectionTitle } from './SectionTitle';

const blocks = [
  ['O problema', 'Em Belo Horizonte, muita gente quer descartar corretamente eletrônicos, óleo, móveis e recicláveis — mas não sabe para onde ir. A informação existe, só está espalhada e difícil de achar.'],
  ['O que o EcoBH faz', 'Reúne pontos de coleta reais num mapa só, organiza por tipo de material e mostra o que está mais perto de você, com rota direta para o seu app de mapas.'],
  ['Dados reais e abertos', 'Os pontos vêm da base colaborativa do OpenStreetMap (Overpass API) e são complementados pelos canais oficiais da Prefeitura de BH. Nada de endereço inventado.'],
  ['Feito pela comunidade', 'Qualquer pessoa pode sugerir um ponto novo ou uma correção. As sugestões são revisadas antes de entrar no mapa, mantendo a informação confiável.'],
  ['Privacidade em primeiro lugar', 'A localização é usada só no seu navegador para calcular distâncias. Nenhuma chave sensível fica exposta no front-end.'],
  ['Próximos passos', 'Parcerias com cooperativas e com a Prefeitura, avaliações de pontos, alertas de campanhas de coleta e versão instalável (PWA).']
];

const stack = [
  'React',
  'Vite',
  'Leaflet',
  'OpenStreetMap',
  'Overpass API',
  'Nominatim',
  'Supabase',
  'Geolocation API',
  'Vercel'
];

export function ProjectPage() {
  return (
    <section id="projeto">
      <SectionTitle
        eyebrow="Sobre o EcoBH"
        title="Uma plataforma pública para uma cidade mais limpa"
        description="O EcoBH nasceu para resolver uma dor concreta de quem mora em BH: descartar do jeito certo sem perder tempo procurando onde."
      />

      <div className="project-hero">
        <div>
          <span>Tecnologia a serviço da cidade</span>
          <h3>Informação real, acessível e gratuita para todo mundo.</h3>
          <p>
            Mais do que um mapa, o EcoBH conecta moradores, cooperativas e poder público em
            torno de um objetivo simples: facilitar o descarte correto e reduzir o lixo que vai
            parar no lugar errado.
          </p>
        </div>
        <div className="stack-cloud">
          {stack.map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>

      <div className="project-grid">
        {blocks.map(([title, text]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
