import React from 'react';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Mí | Ricky Montero Blog</title>
        <meta name="description" content="Conoce más sobre Ricky Montero Terrero, Ingeniero en Software y desarrollador full-stack con experiencia en .NET Core, React y más." />
      </Helmet>
      <div className="max-w-3xl mx-auto py-8">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">Sobre Mí</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            ¡Hola! Soy Ricky Montero Terrero, Ingeniero en Software y desarrollador full-stack apasionado por crear soluciones tecnológicas que marcan la diferencia. Mi enfoque combina la eficiencia técnica con una profunda comprensión de las necesidades del usuario.
          </p>
          <p>
            Con más de 4 años de experiencia en desarrollo web y backend, me especializo en construir aplicaciones robustas y escalables. Mi experiencia abarca desde el desarrollo de APIs RESTful hasta la implementación de interfaces de usuario intuitivas, siempre buscando el equilibrio perfecto entre rendimiento y experiencia de usuario.
          </p>
          <p>
            En este blog, comparto mis conocimientos, experiencias y aprendizajes en el mundo del desarrollo de software. Aquí encontrarás artículos sobre las tecnologías que utilizo, mejores prácticas, tutoriales y reflexiones sobre el desarrollo de software moderno.
          </p>

          <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">Tecnologías Principales</h2>
          <ul className="grid grid-cols-2 gap-2">
            <li>.NET Core</li>
            <li>Entity Framework</li>
            <li>JavaScript</li>
            <li>SQL Server</li>
            <li>PostgreSQL</li>
            <li>Azure DevOps</li>
            <li>React</li>
            <li>HTML/CSS</li>
          </ul>

          <h2 className="text-2xl font-serif font-bold text-gray-900 mt-8 mb-4">Conecta Conmigo</h2>
          <p>
            Puedes encontrarme en:
            <ul className="list-disc ml-6 mt-2">
              <li><a href="https://www.linkedin.com/in/monteroterrero" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">LinkedIn</a></li>
              <li><a href="https://github.com/rickyjobs07" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">GitHub</a></li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800">Twitter</a></li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
};

export default About; 