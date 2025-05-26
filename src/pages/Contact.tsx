import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    // Por ejemplo, usar fetch() para enviar los datos a un endpoint de backend
    // o a un servicio de formularios de terceros.
    console.log('Datos del formulario:', formData);
    alert('Formulario enviado (simulado). Revisa la consola.');
    // Resetear el formulario después de enviar (opcional)
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <Helmet>
        <title>Contacto | Ricky Montero Blog</title>
        <meta name="description" content="Ponte en contacto con Ricky Montero." />
      </Helmet>
      <div className="max-w-3xl mx-auto py-8">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-6">Contacto</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>
            Si tienes alguna pregunta, sugerencia o simplemente quieres saludar, no dudes en usar el siguiente formulario o contactarme a través de mis redes sociales.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje:</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact; 