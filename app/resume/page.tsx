"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaAws,
} from "react-icons/fa";
import {
  IBaseSection,
  IEducation,
  IExperience,
  ISkills,
} from "@/types/resume.types";
import { SiTailwindcss, SiNextdotjs, SiNestjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

import { ScrollArea } from "@/components/ui/scroll-area";

const about: IBaseSection = {
  icon: "/assets/resume/about.svg",
  title: "About",
  description:
    "Over 3 years of intensive self-directed training, project-based learning, and freelance practice, including my involvement in" +
    " research projects at TUMO Labs and completion of the Rolling Scopes School program. In addition, since July 2024, I have been working as a full-stack developer at `Wingform Inc`, where I contribute to both frontend and backend development. During this time, I completed dozens of real-world projects, mastered modern frontend/backend technologies, and developed a strong architectural mindset. My later entry into the industry has made me exceptionally focused, detail-oriented, and a fast learner, enabling me to quickly adapt to new technologies and challenges.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Pavel Konyakhin",
      link: "https://linkedin.com/in/solidados",
    },
    {
      fieldName: "GitHub",
      fieldValue: "@solidados",
      link: "https://github.com/solidados",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    // {
    //   fieldName: "Telegram",
    //   fieldValue: "@solidados",
    // },
    {
      fieldName: "Phone",
      fieldValue: "(+374) 55434741",
      link: "tel:+37455434741",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Russian",
    },
    {
      fieldName: "Email",
      fieldValue: "pavel.konyakhin@gmail.com",
      link: "mailto:pavel.konyakhin@gmail.com",
    },
  ],
};

const experience: IExperience = {
  icon: "/assets/resume/experience.svg",
  title: "Experience",
  description:
    "Professional developer with experience in both frontend and backend roles. Currently working as a Developer at `Wingform Inc`" +
    " (since July 2024). Previously contributed to projects at TUMO Labs, Web Design Studio and some E-commerce Startup. Strong in" +
    " building real-world applications, solving complex problems, and adapting to new technologies quickly.",
  items: [
    {
      duration: "2024 – Present",
      company: "Wingform Inc",
      position: "Developer",
    },
    {
      duration: "2023 – 2024",
      company: "Web Design Studio",
      position: "Frontend Developer",
    },
    {
      duration: "2022 – 2024",
      company: "E-commerce Startup",
      position: "Junior Web Developer",
    },
    {
      duration: "2022 – 2023",
      company: "TUMO Labs",
      position: "Mentor assistant",
    },
  ],
};

const education: IEducation = {
  icon: "/assets/resume/cap.svg",
  title: "Education",
  description:
    "Formal education in Logistics, complemented by specialized technical training in web development. Completed multiple programming" +
    " courses and trainings at Rolling Scopes School (Frontend, Node.js, AWS) and TUMO Labs (Frontend" +
    " Development).",
  items: [
    {
      duration: "2024",
      institution: "Rolling Scopes School",
      degree: "AWS Cloud Development",
    },
    {
      duration: "2024",
      institution: "Rolling Scopes School",
      degree: "Node.js",
    },
    {
      duration: "2023 – 2024",
      institution: "TUMO Labs",
      degree: "Frontend Web Development",
    },
    {
      duration: "2022 - 2024",
      institution: "Rolling Scopes School",
      degree: "Frontend Web Development",
    },
    {
      duration: "2008",
      institution: "Moscow state academy of water transport",
      degree: "Diploma in Logistics and Supply chain",
    },
  ],
};

const skills: ISkills = {
  icon: "/assets/resume/skills.svg",
  title: "Skills",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores eligendi id, minima modi perferendis quo rem tempora" +
    " tempore voluptates. Dignissimos ex quis repellendus soluta.",
  items: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiNestjs />,
      name: "nest.js",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaAws />,
      name: "aws cloud",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

const Resume: FC = () => {
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

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[2rem] text-center xl:text-left">
                <div className="flex items-center gap-6">
                  {experience.icon ? (
                    <Image
                      src={experience?.icon ?? ""}
                      alt={experience.title}
                      width={30}
                      height={30}
                    />
                  ) : null}
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                </div>
                <p className="max-w-full text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[2rem] overflow-y-auto">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[2rem] text-center xl:text-left">
                <div className="flex items-center gap-6">
                  {education.icon ? (
                    <Image
                      src={education?.icon ?? ""}
                      alt={education.title}
                      width={30}
                      height={30}
                    />
                  ) : null}
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                </div>
                <p className="max-w-full text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[2rem] overflow-y-auto">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[2rem]">
                <div className="flex flex-col gap-[2rem] text-center xl:text-left">
                  <div className="flex items-center gap-6">
                    {skills.icon ? (
                      <Image
                        src={skills?.icon ?? ""}
                        alt={skills.title}
                        width={30}
                        height={30}
                      />
                    ) : null}
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                  </div>
                  <p className="max-w-full text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[2rem]">
                  {skills.items.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] flex justify-center items-center group bg-[#232329] rounded-xl">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            {/*https://youtu.be/dImgZ_AH7uA?si=7CK0F0jd-_AJ45hD&t=7327*/}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[2rem]">
                <div className="flex items-center gap-6">
                  {about.icon ? (
                    <Image
                      src={about.icon ?? ""}
                      alt={about.title}
                      width={30}
                      height={30}
                    />
                  ) : null}
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-full mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
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
    </motion.div>
  );
};

export default Resume;
