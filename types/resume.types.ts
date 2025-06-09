import { ReactNode } from "react";

export interface IBaseSection {
  title: string;
  description: string;
  info: IField[];
}

export interface IField {
  fieldName: string;
  fieldValue: string;
}

export interface IExperience {
  icon: string;
  title: string;
  description: string;
  items: IJob[];
}

export interface IJob {
  duration: string;
  company: string;
  position: string;
}

export interface IEducation {
  icon?: string;
  title: string;
  description: string;
  items: IEducationItem[];
}

export interface IEducationItem {
  duration: string;
  institution: string;
  degree?: string;
}

export interface ISkills {
  title: string;
  description: string;
  items: ISkill[];
}

export interface ISkill {
  icon: ReactNode;
  name: string;
}
