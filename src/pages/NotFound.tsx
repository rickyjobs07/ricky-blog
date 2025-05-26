import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>404 - Página no encontrada | Ricky Montero Blog</title>
        <meta name="description" content="La página que buscas no existe." />
      </Helmet>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-8">Página no encontrada</h2>
        <p className="text-gray-700 mb-8">
          Lo sentimos, la página que estás buscando no parece existir.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Ir a la página principal
        </Link>
      </div>
    </>
  );
};

export default NotFound; 