import React from 'react';

const AppsSection = () => {
  return (
    <div className="apps-section">
      <h2 className="text-3xl font-semibold text-center text-white mb-6">Nuestras Aplicaciones</h2>
      <div className="apps-container flex flex-wrap justify-around">
        <div className="app-card bg-gray-800 text-white rounded-lg p-6 m-4 w-64">
          <img src="/assets/Apps/animecast.png" alt="Anime Cast" className="w-full h-auto rounded-lg mb-4" />
          <p>Te permite disfrutar de tus animes favoritos desde la comodidad de tu móvil, permitiendo de manera fácil y sencilla estar al día con los últimos lanzamientos.</p>
          <a href="https://animecast.xyz/download" target="_blank">  
            <button className="mt-4 py-2 px-4 bg-white text-gray-800 rounded-lg">Descargar</button>
          </a>
        </div>
        <div className="app-card bg-gray-800 text-white rounded-lg p-6 m-4 w-64">
          <img src="/assets/Apps/mangacast.png" alt="Manga Cast" className="w-full h-auto rounded-lg mb-4" />
          <p>Te permite disfrutar de tus mangas favoritos desde la comodidad de tu móvil, permitiendo de manera fácil y sencilla estar al día con los últimos lanzamientos.</p>
          <a href="https://manga-cast.com/download" target="_blank">  
            <button className="mt-4 py-2 px-4 bg-white text-gray-800 rounded-lg">Descargar</button>
          </a>
        </div>
        <div className="app-card bg-gray-800 text-white rounded-lg p-6 m-4 w-64">
          <img src="/assets/Apps/hentaicast.png" alt="Hentai Cast" className="w-full h-auto rounded-lg mb-4" />
          <p>Te permite disfrutar de tus hentais favoritos desde la comodidad de tu móvil, permitiendo de manera fácil y sencilla estar al día con los últimos lanzamientos.</p>
          <a href="https://hentaicast.com/download" target="_blank">  
            <button className="mt-4 py-2 px-4 bg-white text-gray-800 rounded-lg">Descargar</button>
          </a>
        </div>
        <div className="app-card bg-gray-800 text-white rounded-lg p-6 m-4 w-64">
          <img src="/assets/Apps/doramacast.png" alt="Dorama Cast" className="w-full h-auto rounded-lg mb-4" />
          <p>Te permite disfrutar de tus doramas favoritos desde la comodidad de tu móvil, permitiendo de manera fácil y sencilla estar al día con los últimos lanzamientos.</p>
          <a href="https://doramacast.csc-lab.xyz/download" target="_blank">  
            <button className="mt-4 py-2 px-4 bg-white text-gray-800 rounded-lg">Descargar</button>
          </a>      
        </div>
      </div>
      <style jsx>{`
        .apps-section {
            text-align: center;
            padding: 10px;
        }
        .apps-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            justify-content: center;
        }
        .app-card {
            background: #333;
            color: #fff;
            border-radius: 8px;
            padding: 20px;
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
