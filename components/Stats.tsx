"use client";

import { FC } from "react";
import CountUp from "react-countup";
import { STATS, type IStatItem } from "@/data/stats.data";

const Stats: FC = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {STATS.map((item: IStatItem) => (
            <div
              key={item.id}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <div className="flex items-end">
                {item.prefix && (
                  <span className="text-4xl xl:text-6xl font-extrabold">{item.prefix}</span>
                )}
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                {item.suffix && (
                  <span className="text-4xl xl:text-6xl font-extrabold">{item.suffix}</span>
                )}
              </div>
              <p className={`${item.text.en.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug font-thin text-white/80`}>
                {item.text.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
