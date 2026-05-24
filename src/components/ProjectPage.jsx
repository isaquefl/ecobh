import { SectionTitle } from './SectionTitle';

const blocks = [
  ['Problema social identificado', 'Falta de acesso rápido a informações de descarte correto para materiais comuns e especiais em Belo Horizonte.'],
  ['Demanda sociocomunitária', 'Moradores precisam de orientação simples, pontos próximos e rotas confiáveis para reduzir descarte irregular.'],
  ['Objetivo do projeto', 'Criar uma plataforma acessível, responsiva e útil para conectar pessoas a pontos de coleta e conteúdo educativo.'],
  ['Sistemas de Informação', 'O projeto usa dados, interfaces, geolocalização e integração com APIs públicas para apoiar decisões cotidianas.'],
  ['Projeto de extensão Estácio', 'A proposta aproxima conhecimento acadêmico de uma necessidade real da comunidade, com foco em impacto social mensurável.'],
  ['Melhorias futuras', 'Curadoria oficial de dados, painel administrativo, autenticação, avaliações, PWA e parcerias com cooperativas e prefeitura.']
];

const stack = [
  'React',
  'Vite',
  'JavaScript',
  'CSS moderno',
  'Leaflet',
  'OpenStreetMap',
  'Nominatim',
  'Overpass API',
  'Geolocation API',
  'Vercel ready',
  'Dados locais fallback'
];

export function ProjectPage() {
  return (
    <section id="projeto">
      <SectionTitle
        eyebrow="Sobre o projeto"
        title="EcoBH como produto acadêmico, social e tecnológico"
        description="Uma proposta de plataforma pública que demonstra como tecnologia pode resolver uma dor concreta da cidade."
      />

      <div className="project-hero">
        <div>
          <span>Estácio · Sistemas de Informação e Sociedade</span>
          <h3>Da pesquisa acadêmica à demonstração funcional.</h3>
          <p>
            O EcoBH foi estruturado para apresentação universitária, portfólio, GitHub e LinkedIn,
            com linguagem profissional, arquitetura organizada e visual de produto real.
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
