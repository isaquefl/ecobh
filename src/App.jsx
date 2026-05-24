import { useEffect, useState } from 'react';
import { CategoriesPage } from './components/CategoriesPage';
import { ContactPage } from './components/ContactPage';
import { EducationPage } from './components/EducationPage';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { MapView } from './components/MapView';
import { NavBar } from './components/NavBar';
import { ProjectPage } from './components/ProjectPage';

const views = {
  inicio: Home,
  mapa: MapView,
  categorias: CategoriesPage,
  educacao: EducationPage,
  projeto: ProjectPage,
  contato: ContactPage
};

function App() {
  const [activeView, setActiveView] = useState(() => window.location.hash.replace('#', '') || 'inicio');
  const ActivePage = views[activeView] || Home;

  useEffect(() => {
    const onHashChange = () => setActiveView(window.location.hash.replace('#', '') || 'inicio');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const animatedItems = document.querySelectorAll(
      '.section-title, .hero-copy > *, .hero-product, .benefit-strip article, .problem-grid article, .solution-band, .map-sidebar, .map-canvas-wrap, .results-header, .point-card, .category-card, .lesson-card, .project-hero, .project-grid article, .contact-form'
    );

    animatedItems.forEach((item, index) => {
      item.classList.add('reveal-item');
      item.style.setProperty('--reveal-delay', `${Math.min(index * 45, 360)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -60px 0px' }
    );

    animatedItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [activeView]);

  function navigate(view) {
    window.location.hash = view;
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="app-shell">
      <NavBar activeView={activeView} onNavigate={navigate} />
      <main key={activeView} className="page-transition">
        <ActivePage onNavigate={navigate} />
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
