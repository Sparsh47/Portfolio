"use client";

import {useState, useEffect, SetStateAction} from "react";
import ResumeControls from "@/components/ResumeControls";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import About from "@/components/About";
import { servicesInfo } from "@/constants/constants";
import {fetchExp} from "@/lib/utils";
import {WorkItem} from "@/types/firebaseTypes";

const Resume = () => {
  const [section, setSection] = useState(1);
  const [workEx, setWorkEx] = useState<WorkItem[]>([]);

  const handleSectionSelect = (number: number) => {
    setSection(number);
  };
  const data = servicesInfo[section - 1];

  useEffect(() => {
      (async ()=>{
          const data = await fetchExp();
          setWorkEx(data);
      })();
  }, [section])
  return (
    <div className="bg-background w-full min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 text-white p-5">
      <div className="w-full lg:w-1/4 h-auto lg:h-1/2">
        <ResumeControls
          section={section}
          handleSectionSelect={handleSectionSelect}
        />
      </div>
      <div className="w-full lg:w-2/3 h-auto lg:h-2/3">
        {section === 1 && <Experience title="My Experience" desc="With hands-on experience in various aspects of web development, I have contributed to several projects, showcasing my skills in both frontend and backend development." data={workEx} />}
        {section === 2 && <Skills data={data} />}
        {section === 3 && <About data={data} />}
      </div>
    </div>
  );
};

export default Resume;
