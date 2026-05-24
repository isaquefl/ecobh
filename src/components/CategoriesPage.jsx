import { categories } from '../data/categories';
import { SectionTitle } from './SectionTitle';

export function CategoriesPage() {
  return (
    <section id="categorias">
      <SectionTitle
        eyebrow="Guia de descarte"
        title="Como separar e encaminhar cada material"
        description="Orientações simples para o dia a dia, com cuidados importantes antes de levar o material ao ponto de coleta."
      />

      <div className="category-cards">
        {categories.map((category) => (
          <article className="category-card" key={category.id}>
            <span>{category.name}</span>
            <p>{category.short}</p>
            <dl>
              <div>
                <dt>Como separar</dt>
                <dd>{category.separates}</dd>
              </div>
              <div>
                <dt>Onde descartar</dt>
                <dd>{category.where}</dd>
              </div>
              <div>
                <dt>Cuidados</dt>
                <dd>{category.care}</dd>
              </div>
              <div>
                <dt>Impacto</dt>
                <dd>{category.impact}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
