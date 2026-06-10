"use client";

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import ExperienceModal from "@/components/ExperienceModal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

import { ABOUT, type IAboutField } from "@/data/about.data";
import { EXPERIENCE, type IJobItem } from "@/data/experience.data";
import { EDUCATION, type IEducationItem } from "@/data/education.data";
import { SKILLS, type ISkillItem } from "@/data/skills.data";

const Resume = () => {
  const [ selectedJob, setSelectedJob ] = useState<IJobItem | null>(null);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex justify-center items-start py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px] mb-8"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* Experience */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[2rem] text-center xl:text-left">
                <div className="flex items-center gap-6">
                  {EXPERIENCE.icon && (
                    <Image src={EXPERIENCE.icon} alt={EXPERIENCE.title.en} width={30} height={30} style={{ height: 'auto' }} />
                  )}
                  <h3 className="text-4xl font-bold">{EXPERIENCE.title.en}</h3>
                </div>
                <p className="max-w-full text-white/60 mx-auto xl:mx-0">
                  {EXPERIENCE.description.en}
                </p>
                <ScrollArea className="h-[400px]" type="hover">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[2rem] overflow-y-auto">
                    {EXPERIENCE.items.map((item: IJobItem) => (
                      <li
                        key={item.id}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 cursor-pointer hover:border hover:border-accent/50 transition-all duration-300"
                        onClick={() => setSelectedJob(item)}
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position.en}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                          {item.companyUrl ? (
                            <Link
                              href={item.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/60 hover:text-accent transition-all duration-300"
                            >
                              {item.company}
                            </Link>
                          ) : (
                            <p className="text-white/60">{item.company}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            
            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[2rem] text-center xl:text-left">
                <div className="flex items-center gap-6">
                  {EDUCATION.icon && (
                    <Image src={EDUCATION.icon} alt={EDUCATION.title.en} width={30} height={30} style={{ height: 'auto' }} />
                  )}
                  <h3 className="text-4xl font-bold">{EDUCATION.title.en}</h3>
                </div>
                <p className="max-w-full text-white/60 mx-auto xl:mx-0">
                  {EDUCATION.description.en}
                </p>
                <ScrollArea className="h-[400px]" type="hover">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[2rem]">
                    {EDUCATION.items.map((item: IEducationItem) => (
                      <li
                        key={item.id}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree.en}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                          {item.institutionUrl ? (
                            <Link
                              href={item.institutionUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/60 hover:text-accent transition-all duration-300"
                            >
                              {item.institution}
                            </Link>
                          ) : (
                            <p className="text-white/60">{item.institution}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            
            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[2rem]">
                <div className="flex flex-col gap-[2rem] text-center xl:text-left">
                  <div className="flex items-center gap-6">
                    {SKILLS.icon && (
                      <Image src={SKILLS.icon} alt={SKILLS.title.en} width={30} height={30} style={{ height: 'auto' }} />
                    )}
                    <h3 className="text-4xl font-bold">{SKILLS.title.en}</h3>
                  </div>
                  <p className="max-w-full text-white/60 mx-auto xl:mx-0">
                    {SKILLS.description.en}
                  </p>
                </div>
                <ScrollArea className="h-[65dvh]" type="hover">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[2rem] mr-6">
                    {SKILLS.items.map((skill: ISkillItem) => (
                      <li key={skill.id}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <a
                                href={skill.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full h-[150px] flex justify-center items-center group bg-[#232329] rounded-xl"
                              >
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </a>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name.en}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            
            {/* About */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[2rem]">
                <div className="flex items-center gap-6">
                  {ABOUT.icon && (
                    <Image src={ABOUT.icon} alt={ABOUT.title.en} width={30} height={30} style={{ height: 'auto' }} />
                  )}
                  <h3 className="text-4xl font-bold">{ABOUT.title.en}</h3>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {ABOUT.description.en}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-10 max-w-full mx-auto xl:mx-0">
                  {ABOUT.info.map((item: IAboutField) => (
                    <li
                      key={item.id}
                      className="flex justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName.en}</span>
                      {item.link ? (
                        <Link
                          className="text-xl hover:text-accent transition-all duration-300"
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.fieldValue}
                        </Link>
                      ) : (
                        <span className="text-xl">{item.fieldValue}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            
          </div>
        </Tabs>
      </div>
      <ExperienceModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </motion.div>
  );
};

export default Resume;
