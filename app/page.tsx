"use client";

import { FC } from "react";
import { useLocale } from '@/context/LocaleContext';

import { UI } from "@/data/ui.data";

import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home: FC = () => {
  const { locale } = useLocale();
  
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-white/80">{UI.role[locale]}</span>
            <h1 className="h1 mb-6 whitespace-pre-line">
              <span className="block">{UI.greeting[locale]}</span>
              
              <span className="block text-accent">
                {UI.name[locale].split(' ').join('\n')}
              </span>
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">
              {UI.about_short[locale]}
            </p>
            
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/api/cv" download="cv-pavel-konyakhin.pdf">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>{UI.download_cv[locale]}</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
