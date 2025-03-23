import Image from "next/image";
import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

type SkillsType = {
    text: string;
    icon: IconType;
};

type LinksType = {
    liveUrl: string;
    githubUrl: string;
}

export default function ProjectCard({
                                        image1,
                                        image2,
                                        title,
                                        desc,
                                        skills,
                                        links
                                    }: {
    image1: string,
    image2: string,
    title: string,
    desc: string,
    skills: SkillsType[],
    links: LinksType
}) {
    return (
        <div className="w-full flex flex-col md:flex-row items-start justify-between gap-12">
            <div className="lg:w-[800px] h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl p-2 group relative border border-gray-700 overflow-hidden cursor-pointer">
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
            <div className="w-full md:max-w-md lg:max-w-lg flex flex-col">
                <div className="mb-4 flex gap-5">
                    <h3 className="text-3xl font-medium">{title}</h3>
                    <div className="flex gap-4 mt-2">
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
    )
}

function SkillCard({text, icon: Icon}: SkillsType) {
    return (
        <div className="p-2 border border-gray-700 rounded-lg flex items-center justify-center gap-2 hover:text-accent cursor-pointer">
            <Icon />
            <span className="text-sm font-light">{text}</span>
        </div>
    )
}