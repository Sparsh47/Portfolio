"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { ProjectItem } from "@/types/firebaseTypes";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DynamicIcon from "@/components/DynamicIcon";

export default function ProjectCard({
                                        image1,
                                        image2,
                                        title,
                                        desc,
                                        skills,
                                        links,
                                        type = "web",
                                    }: Omit<ProjectItem, "id">) {
    const cardRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!cardRef.current) return;

        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const badges = gsap.utils.toArray<HTMLDivElement>(".skill-badge");
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });

            tl.from(cardRef.current, {
                opacity: 0,
                y: 80,
                duration: 0.7,
                ease: "power3.out",
            });

            tl.from(
                badges,
                {
                    opacity: 0,
                    y: 20,
                    stagger: 0.1,
                    duration: 0.3,
                    ease: "power2.out",
                },
                "-=0.5"
            );
        }, cardRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={cardRef}
            className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12"
        >
            <div className="w-full lg:w-[700px] flex-shrink-0 flex justify-center items-center">
                <div
                    className={`group relative border border-gray-700 overflow-hidden cursor-pointer rounded-2xl p-2
          ${
                        type === "mobile"
                            ? "w-full max-w-[280px] sm:max-w-[300px] h-[500px] sm:h-[580px] mx-auto"
                            : "w-full h-[350px] sm:h-[400px] lg:h-[450px]"
                    }`}
                >
                    <Image
                        width={1000}
                        height={1000}
                        src={image1}
                        alt={title}
                        className="aspect-auto h-full w-full object-cover rounded-xl group-hover:opacity-0 transition-opacity duration-300"
                    />
                    <Image
                        width={1000}
                        height={1000}
                        src={image2}
                        alt={title}
                        className="absolute top-2 left-2 right-2 bottom-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] object-cover rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute w-full top-0 h-[1.5px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                </div>
            </div>

            <div className="w-full flex-1 min-w-0 flex flex-col">
                <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
                    <h3 className="text-3xl font-medium">{title}</h3>
                    <div className="flex gap-4">
                        {links?.githubUrl && (
                            <Link
                                href={links.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors"
                            >
                                <FaGithub className="w-4 h-4" />
                                <span className="text-sm">GitHub</span>
                            </Link>
                        )}
                        {links?.liveUrl && (
                            <Link
                                href={links.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors"
                            >
                                <FiExternalLink className="w-4 h-4" />
                                <span className="text-sm">Live</span>
                            </Link>
                        )}
                    </div>
                </div>
                <p className="text-base text-gray-500">{desc}</p>
                <div className="w-full flex gap-5 flex-wrap mt-4">
                    {skills?.map((skill, index) => (
                        <SkillCard key={index} {...skill} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function SkillCard({ text, icon }: { text: string; icon: string }) {
    return (
        <div className="p-2 border rounded-lg flex items-center gap-2 cursor-pointer hover:border-accent hover:text-accent duration-150 ease-in-out transition-all">
            <DynamicIcon iconName={icon} />
            <span className="text-sm">{text}</span>
        </div>
    );
}