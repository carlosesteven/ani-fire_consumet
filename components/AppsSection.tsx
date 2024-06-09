import React from 'react';

const AppsSection = () => {
  return (
    <div className="apps-section">
      <h2 className="text-3xl font-semibold text-center text-white mb-6">Nuestras Aplicaciones</h2>
      <div className="apps-container flex flex-wrap justify-around">
        <div className="app-card bg-gray-800 text-white rounded-lg p-6 m-4 w-64">
          <img src="/assets/Apps/animecast.png" alt="Anime Cast" className="w-full h-auto rounded-lg mb-4" />
          <p>Te permite disfrutar de tus animes favoritos desde la comodidad de tu móvil, permitiendo de manera fácil y sencilla estar al día con los últimos lanzamientos.</p>
          <p className="font-bold mt-4">Idiomas Soportados<br/>Ingles, Español</p>
          <button className="mt-4 py-2 px-4 bg-white text-gray-800 rounded-lg">Descargar Anime Cast</button>
        </div>
        <div className="app-card bg-gray-800 text-white rounded-lg p-6 m-4 w-64">
          <img src="/assets/Apps/mangacast.png" alt="Manga Cast" className="w-full h-auto rounded-lg mb-4" />
          <p>Te permite disfrutar de tus mangas favoritos desde la comodidad de tu móvil, permitiendo de manera fácil y sencilla estar al día con los últimos lanzamientos.</p>
          <p className="font-bold mt-4">Idiomas Soportados<br/>Ingles, Español, Portugues</p>
          <button className="mt-4 py-2 px-4 bg-white text-gray-800 rounded-lg">Descargar Manga Cast</button>
        </div>
        <div className="app-card bg-gray-800 text-white rounded-lg p-6 m-4 w-64">
          <img src="/assets/Apps/hentaicast.png" alt="Hentai Cast" className="w-full h-auto rounded-lg mb-4" />
          <p>Te permite disfrutar de tus hentais favoritos desde la comodidad de tu móvil, permitiendo de manera fácil y sencilla estar al día con los últimos lanzamientos.</p>
          <p className="font-bold mt-4">Idiomas Soportados<br/>Ingles, Español</p>
          <button className="mt-4 py-2 px-4 bg-white text-gray-800 rounded-lg">Descargar Hentai Cast</button>
        </div>
        <div className="app-card bg-gray-800 text-white rounded-lg p-6 m-4 w-64">
          <img src="/assets/Apps/doramacast.png" alt="Dorama Cast" className="w-full h-auto rounded-lg mb-4" />
          <p>Te permite disfrutar de tus doramas favoritos desde la comodidad de tu móvil, permitiendo de manera fácil y sencilla estar al día con los últimos lanzamientos.</p>
          <p className="font-bold mt-4">Idiomas Soportados<br/>Ingles, Español</p>
          <button className="mt-4 py-2 px-4 bg-white text-gray-800 rounded-lg">Descargar Dorama Cast</button>
        </div>
      </div>
      <style jsx>{`
        .apps-section {
          text-align: center;
          padding: 20px;
        }
        .apps-container {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }
        .app-card {
          background: #333;
          color: #fff;
          border-radius: 8px;
          padding: 20px;
          margin: 10px;
          width: 200px;
          text-align: center;
        }
        .app-card img {
          width: 100%;
          border-radius: 8px;
        }
        .app-card button {
          margin-top: 10px;
          padding: 10px;
          background: #fff;
          color: #333;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }
        .app-card button:hover {
          background: #ccc;
        }
      `}</style>
    </div>
  );
};

export default AppsSection;
