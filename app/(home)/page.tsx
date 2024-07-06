/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TopSearchItems } from "@/constants";
import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import AppsSection from "@/components/AppsSection";

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
              placeholder="One piece"
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
              <span className="font-medium mr-2 dark:text-primary-foreground text-secondary-foreground">1 Top search:</span>
                  {TopSearchItems.map((item, index) => (
                    <Link key={item.name + index} href={item.href} className="hover:text-primary duration-300 text-base">
                      {item.name}{', '}
                    </Link>
                  ))}
            </p>
          </div>

      <Button asChild className="w-full rounded-none mt-3">
        <Link href="/home">
          Visit full site
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
      
      <AppsSection />
    </div>
  );
};
export default Home;
