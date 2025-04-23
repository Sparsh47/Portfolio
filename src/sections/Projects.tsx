"use client";

import ProjectCard from "@/components/ProjectCard";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ProjectItem } from "@/types/firebaseTypes";
import { fetchProjects } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects() {
    const [projects, setProjects] = useState<ProjectItem[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        (async () => {
            const projects = await fetchProjects();
            setProjects(projects);
        })();
    }, []);

    useLayoutEffect(() => {
        if (!containerRef.current || projects.length === 0) return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>(".project-card");

            gsap.from(".section-heading", {
                opacity: 0,
                y: -50,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            });

            gsap.from(cards, {
                opacity: 0,
                y: 100,
                duration: 1,
                ease: "power3.out",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, [projects]);

    return (
        <section
            ref={containerRef}
            className="w-full min-h-screen flex flex-col items-center justify-center bg-background py-16 px-5"
        >
            <div className="w-full max-w-7xl flex flex-col items-center justify-center text-white gap-8">
                <div className="text-center section-heading">
                    <h2 className="text-5xl">My Works</h2>
                    <p className="w-full my-4 max-w-md text-center">
                        Explore a collection of my latest works, showcasing creativity and technical expertise in action.
                    </p>
                </div>
                <div className="w-full flex flex-col items-center gap-16">
                    {projects &&
                        projects.map(({ id, ...project }) => (
                            <div key={id} className="project-card">
                                <ProjectCard {...project} />
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}
