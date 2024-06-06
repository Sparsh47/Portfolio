"use client";

import { useState } from "react";

const Skills = ({ data }: { data: any }) => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  return (
    <div className="w-full h-full p-2 flex flex-col justify-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl px-5 font-bold">
        {data.title}
      </h2>
      <p className="py-4 md:py-6 lg:py-10 px-5 text-justify">{data.desc}</p>
      <div className="w-full h-auto max-h-80 md:max-h-[20rem] flex flex-wrap items-center gap-5 px-5 overflow-auto">
        {data.skills.map((skill: any, index: number) => (
          <div
            className="relative p-4 md:p-6 bg-secondary rounded-lg transition-all duration-200 ease-in-out hover:shadow-xl hover:text-accent"
            key={index}
            onMouseEnter={() => setHoveredSkill(index)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            {/* @ts-ignore */}
            <skill.icon className="w-8 h-8 md:w-12 md:h-12" />
            {hoveredSkill === index && (
              <div className="absolute bottom-full mb-2 px-2 py-1 text-sm text-white bg-black rounded">
                {skill.text}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
