"use client";

import ProjectCard from "@/components/ProjectCard";
import {useEffect, useState} from "react";
import {ProjectItem} from "@/types/firebaseTypes";
import {fetchProjects} from "@/lib/utils";

export default function Projects() {

    const [projects, setProjects] = useState<ProjectItem[]>([])

    useEffect(() => {
        (async()=>{
            const projects = await fetchProjects();
            setProjects(projects);
        })();
    }, []);

    return (
        <section className="w-full min-h-screen flex flex-col items-center justify-center bg-background py-16 px-5">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center text-white gap-8">
                <div className="text-center">
                    <h2 className="text-5xl">My Works</h2>
                    <p className="w-full my-4 max-w-md text-center">Explore a collection of my latest works, showcasing creativity and technical expertise in action.</p>
                </div>
                <div className="w-full flex flex-col items-center gap-16">
                    {projects && projects.map(({id, ...project}) => (
                        <ProjectCard key={id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    )
}