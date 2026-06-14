"use client";

import Link from "next/link";
import { useLocale } from '@/context/LocaleContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { IJobItem } from "@/data/experience.data";

interface IExperienceModalProps {
  job: IJobItem | null;
  onClose: VoidFunction;
}

const ExperienceModal = ({job, onClose}: IExperienceModalProps) => {
  if (!job) return null;
  const { locale } = useLocale();
  
  return (
    <Dialog open={!!job} onOpenChange={(open) => { if (!open) onClose() }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{job.position[locale]}</DialogTitle>
          <DialogDescription className="flex items-center gap-2 text-sm">
            <span className="text-accent">{job.duration}</span>
            <span className="text-white/20">·</span>
            {job.companyUrl ? (
              <Link
                href={job.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-accent transition-colors"
              >
                {job.company}
              </Link>
            ) : (
              <span className="text-white/60">{job.company}</span>
            )}
            <span className="text-white/20">·</span>
            <span className="text-white/60">{job.location}</span>
          </DialogDescription>
        </DialogHeader>
        
        {job.projects && job.projects.length > 0 && (
          <div className="mb-5">
            <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
              Key Projects
            </h4>
            <ul className="flex flex-col gap-2">
              {job.projects.map((project, i) => (
                <li key={i} className="flex gap-3 text-sm text-white/70">
                  <span className="text-accent mt-0.5 shrink-0">›</span>
                  <span>{project}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {job.responsibilities && job.responsibilities.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
              Responsibilities
            </h4>
            <ul className="flex flex-col gap-2">
              {job.responsibilities.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-white/70">
                  <span className="text-accent mt-0.5 shrink-0">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ExperienceModal;
