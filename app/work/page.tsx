"use client";

import { FC, useState } from "react";
import { useLocale } from '@/context/LocaleContext';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import Link from "next/link";
import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import WorkSliderButtons from "@/components/WorkSliderButtons/WorkSliderButtons";
import { WORK, type IProjectItem, IStackItem } from '@/data/work.data';

import "swiper/css";

const Work: FC = () => {
  const [project, setProject] = useState<IProjectItem>(WORK.items[0]);
  const { locale } = useLocale();

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    setProject(WORK.items[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      exit={{ opacity: 0 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[2rem]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[2rem] h-[50%] select-none">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[2.625rem] leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category[locale]} project
              </h2>
              <p className="text-white/60">{project.description[locale]}</p>
              <ul className="flex gap-4">
                {project.stack.map((item: IStackItem, index: number) => (
                  <li key={item.name} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20" />
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[4.375rem] h-[4.375rem] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[4.375rem] h-[4.375rem] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] select-none">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12 relative"
              onSlideChange={handleSlideChange}
            >
              {WORK.items.map((item: IProjectItem) => (
                <SwiperSlide key={item.num} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-[#1c1c22]">
                    <div className="relative w-full h-full">
                      <Image
                        src={item.image}
                        fill
                        sizes="(max-width: 1280px) 100vw, 50vw"
                        className="object-contain"
                        alt={item.title}
                        loading="eager"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                buttonStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
