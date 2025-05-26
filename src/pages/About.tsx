import React from 'react';
import { Helmet } from 'react-helmet-async';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Mí | Ricky Montero Blog</title>
        <meta name="description" content="Conoce más sobre Ricky Montero, desarrollador web y autor del blog." />
      </Helmet>
      <div className="max-w-3xl mx-auto py-8">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">Sobre Mí</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            ¡Hola! Soy Ricky Montero, un apasionado del desarrollo web. Con años de experiencia en la creación de aplicaciones web robustas y amigables para el usuario, disfruto transformando ideas complejas en soluciones digitales funcionales y estéticamente agradables.
          </p>
          <p>
            Mi viaje en el mundo de la tecnología comenzó explorando... (aquí puedes añadir más detalles sobre tu experiencia, intereses, tecnologías favoritas, etc.)
          </p>
          <p>
            En este blog, comparto mis aprendizajes, tutoriales, reflexiones sobre tecnología y desarrollo, y quizás alguna que otra historia personal. Espero que encuentres el contenido útil e inspirador.
          </p>
          <h2>Mi Enfoque</h2>
          <ul>
            <li>Desarrollo Frontend con React y TypeScript</li>
            <li>Diseño Responsivo y Accesible</li>
            <li>Optimización de Rendimiento</li>
            <li>Aprendizaje Continuo y Exploración de Nuevas Tecnologías</li>
          </ul>
          <h2>Conecta Conmigo</h2>
          <p>
            Puedes encontrarme en: (aquí puedes añadir enlaces a tus perfiles profesionales, como LinkedIn, GitHub, Twitter, etc.)
            <ul>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Twitter</a></li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
};

export default About; 