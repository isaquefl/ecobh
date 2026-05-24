import { SectionTitle } from './SectionTitle';

const lessons = [
  {
    title: 'O que é reciclagem?',
    text: 'Reciclagem é o processo de transformar resíduos em matéria-prima ou novos produtos. Ela depende de separação correta, coleta, triagem e cadeia produtiva preparada.'
  },
  {
    title: 'Por que descartar corretamente?',
    text: 'O descarte correto reduz contaminação, melhora a limpeza urbana, evita enchentes causadas por resíduos e fortalece cooperativas e iniciativas sociais.'
  },
  {
    title: 'Como separar em casa',
    text: 'Mantenha recicláveis limpos e secos, separe orgânicos dos secos, armazene óleo em garrafa e entregue pilhas, baterias e eletrônicos em locais específicos.'
  },
  {
    title: 'O que pode reciclar',
    text: 'Papel, papelão, plástico, vidro e metal costumam ser recicláveis quando não estão contaminados. Embalagens com restos de comida exigem limpeza simples.'
  },
  {
    title: 'O que exige atenção',
    text: 'Lâmpadas, baterias, medicamentos, óleo, eletrônicos, espelhos, porcelanas e móveis não devem ir automaticamente para a coleta comum.'
  },
  {
    title: 'Tecnologia, sociedade e sustentabilidade',
    text: 'Sistemas de Informação podem conectar dados públicos, mapas, usuários e instituições para resolver problemas urbanos com baixo custo e alto alcance.'
  }
];

export function EducationPage() {
  return (
    <section id="educacao">
      <SectionTitle
        eyebrow="Educação ambiental"
        title="Informação clara para transformar hábito em impacto"
        description="Conteúdo em linguagem direta para moradores, estudantes e comunidade acadêmica."
      />

      <div className="lesson-grid">
        {lessons.map((lesson, index) => (
          <article key={lesson.title} className="lesson-card">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h3>{lesson.title}</h3>
            <p>{lesson.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
