import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - Pagina nu a fost găsită</h1>
      <p className="mt-4">Ne pare rău, pagina pe care o cauți nu există.</p>
      <Link to="/" className="mt-4 bg-blue-500 text-white p-2">
        Înapoi la pagina principală
      </Link>
    </div>
  );
};

export default NotFoundPage;
