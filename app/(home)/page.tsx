/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TopSearchItems } from "@/constants";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

//import AppsSection from "@/components/apps";

const Home = () => {
  const [query, setQuery] = useState<string>("");

  return (
    <div className="w-full h-auto max-w-[1220px] my-4 mx-auto xl:px-0 sm:px-4 px-2">
      <div className="flex gap-x-0 items-end">
        <p className="text-6xl font-logo text-secondary-foreground dark:text-white leading-none">
           Web <span className="text-[#FF003D]">Anime Cast</span>
        </p>
      </div>

      <div className="flex w-full items-center gap-x-6">
        <div className="w-full">
          <div className="w-full gap-5 h-auto my-8 flex sm:flex-row flex-col">
            <Input
              className="rounded-full h-14 text-lg pl-6"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search: Anime Name"
            />
            <Button
              asChild
              className="rounded-full h-14 w-full sm:w-14 shrink-0"
            >
              <a href={`/search?keyword=${query}`} className={cn(!query && "pointer-events-none opacity-70")}>
                <SearchIcon className="h-6 w-6" />
              </a>
            </Button>
          </div>
          <div className="flex w-full">
            <p>
              <span className="font-medium mr-2 dark:text-primary-foreground text-secondary-foreground font-weight-bold">Top Search:</span>
                  {TopSearchItems.map((item, index) => (
                    <Link key={item.name + index} href={item.href} className="hover:text-primary duration-300 text-base">
                      {item.name}{', '}
                    </Link>
                  ))}
            </p>
          </div>

      <Button asChild className="w-full rounded-lg mt-4 font-weight-bold">
        <Link href="/home">
          Watch Anime with Anime Cast
        </Link>
      </Button>
        </div>

        <div className="relative hidden lg:block h-[30vw] max-h-72 max-w-[34rem] min-w-[26rem] w-[60vw]">
          <img
            src="/assets/nav.png"
            alt="hinata shoyo"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
      
      <div className="apps-section">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">Nuestras Aplicaciones</h2>
        <div className="apps-container flex flex-wrap justify-around">
          <div className="app-card bg-gray-800 text-white rounded-lg p-6 m-4 w-64">
            <img src="/assets/Apps/animecast.png" alt="Anime Cast" className="w-full h-auto rounded-lg mb-4" />
            <p>Te permite disfrutar de tus animes favoritos desde la comodidad de tu móvil, permitiendo de manera fácil y sencilla estar al día con los últimos lanzamientos.</p>
            <a href="https://animecast.xyz/download" target="_blank">  
              <button className="mt-4 py-2 px-4 bg-white text-gray-800 rounded-lg form-control mt-2 font-weight-bold">Descargar</button>
            </a>
          </div>
          <div className="app-card bg-gray-800 text-white rounded-lg p-6 m-4 w-64">
            <img src="/assets/Apps/mangacast.png" alt="Manga Cast" className="w-full h-auto rounded-lg mb-4" />
            <p>Te permite disfrutar de tus mangas favoritos desde la comodidad de tu móvil, permitiendo de manera fácil y sencilla estar al día con los últimos lanzamientos.</p>
            <a href="https://manga-cast.com/download" target="_blank">  
              <button className="mt-4 py-2 px-4 bg-white text-gray-800 rounded-lg form-control mt-2 font-weight-bold">Descargar</button>
            </a>
          </div>
          <div className="app-card bg-gray-800 text-white rounded-lg p-6 m-4 w-64">
            <img src="/assets/Apps/hentaicast.png" alt="Hentai Cast" className="w-full h-auto rounded-lg mb-4" />
            <p>Te permite disfrutar de tus hentais favoritos desde la comodidad de tu móvil, permitiendo de manera fácil y sencilla estar al día con los últimos lanzamientos.</p>
            <a href="https://hentaicast.com/download" target="_blank">  
              <button className="mt-4 py-2 px-4 bg-white text-gray-800 rounded-lg form-control mt-2 font-weight-bold">Descargar</button>
            </a>
          </div>
          <div className="app-card bg-gray-800 text-white rounded-lg p-6 m-4 w-64">
            <img src="/assets/Apps/doramacast.png" alt="Dorama Cast" className="w-full h-auto rounded-lg mb-4" />
            <p>Te permite disfrutar de tus doramas favoritos desde la comodidad de tu móvil, permitiendo de manera fácil y sencilla estar al día con los últimos lanzamientos.</p>
            <a href="https://doramacast.csc-lab.xyz/download" target="_blank">  
              <button className="mt-4 py-2 px-4 bg-white text-gray-800 rounded-lg form-control mt-2 font-weight-bold">Descargar</button>
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
      
    </div>
  );
};
export default Home;
