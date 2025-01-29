import { BsGithub, BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn, FaHashnode, FaCss3Alt, FaAws, FaGolang, FaDocker  } from "react-icons/fa6";
import { FaHtml5, FaNodeJs } from "react-icons/fa";
import { DiRedis } from "react-icons/di";
import {
    SiJavascript,
    SiTypescript,
    SiTailwindcss,
    SiBootstrap,
    SiReact,
    SiNextdotjs,
    SiMongodb,
    SiMysql,
    SiReactrouter,
    SiGraphql,
    SiDjango,
    SiFlask,
    SiRecoil,
    SiZod,
    SiPostgresql,
    SiPrisma, SiTurborepo
} from "react-icons/si";

export const navLinks = ["Home", "Services", "Resume", "Contact"];

export const homeLinks = [
    { link: "https://github.com/Sparsh47", icon: BsGithub },
    { link: "https://www.linkedin.com/in/sparshshandilya/", icon: FaLinkedinIn },
    { link: "https://x.com/SparshShandily3", icon: BsTwitterX },
    { link: "https://sparsh-shandilya.hashnode.dev/", icon: FaHashnode }
]

export const services = [
    {
        title: "MERN Stack Development",
        desc: "Specializing in full-stack development using MongoDB, Express, React, and Node.js, I build robust and scalable web applications tailored to meet client needs."
    },
    {
        title: "Next.js Development",
        desc: "Leveraging the power of Next.js, I create dynamic, high-performance websites and applications with server-side rendering and static site generation."
    },
    {
        title: "UI/UX Design",
        desc: "Crafting intuitive and aesthetically pleasing user interfaces, I ensure a seamless user experience through thoughtful design and user-centric principles."
    },
    {
        title: "React Native Development",
        desc: "Developing cross-platform mobile applications using React Native, I deliver efficient and high-quality apps for both Android and iOS platforms."
    },
]

export const controlOptions = ["Experience", "Skills", "About me"]

export const servicesInfo = [
    {
        title: "My Experience",
        desc: "With hands-on experience in various aspects of web development, I have contributed to several projects, showcasing my skills in both frontend and backend development.",
        exp: [
            {
                date: "10/2024 - Present",
                role: "Software Developer Intern",
                company: "Destino Solutions"
            },
            {
                date: "07/2024 - 12/2024",
                role: "Fullstack Developer Intern",
                company: "The Curious Bunny Studios"
            },
            {
                date: "04/2024 - 06/2024",
                role: "MERN Stack Teaching Assistant",
                company: "Coding Ninjas"
            },
            {
                date: "02/2024 - 03/2024",
                role: "Next.js Developer Intern",
                company: "Web3ProjectLinks"
            },
            {
                date: "08/2023 - 09/2023",
                role: "Web Developer Intern",
                company: "CODSOFT"
            },
        ]
    },
    {
        title: "My Skills",
        desc: "I possess a diverse set of skills in web development, ranging from front-end technologies like React and Next.js to back-end frameworks such as Node.js and Django.",
        skills: [
            // --- FRONTEND ---
            { icon: FaHtml5,       text: "HTML" },
            { icon: FaCss3Alt,     text: "CSS" },
            { icon: SiJavascript,  text: "Javascript" },
            { icon: SiTypescript,  text: "Typescript" },
            { icon: SiReact,       text: "React.js" },
            { icon: SiNextdotjs,   text: "Next.js" },
            { icon: SiReactrouter, text: "React Router" },
            { icon: SiRecoil,      text: "Recoil" },
            { icon: SiTailwindcss, text: "Tailwind CSS" },
            { icon: SiBootstrap,   text: "Bootstrap" },
            { icon: SiZod,         text: "Zod" },

            // --- BACKEND ---
            { icon: FaNodeJs,      text: "Node.js" },
            { icon: SiDjango,      text: "Django" },
            { icon: SiFlask,       text: "Flask" },
            { icon: FaGolang,      text: "GO" },
            { icon: SiGraphql,     text: "GraphQL" },
            { icon: SiMysql,       text: "MySQL" },
            { icon: SiMongodb,     text: "MongoDB" },
            { icon: SiPostgresql,  text: "PostgreSQL" },
            { icon: DiRedis,       text: "Redis" },
            { icon: SiPrisma,      text: "Prisma" },

            // --- DEVOPS / MISC ---
            { icon: FaAws,         text: "AWS" },
            { icon: FaDocker,      text: "Docker" },
            { icon: SiTurborepo,   text: "Turborepo" },
        ]
    },
    {
        title: "About me",
        desc: "I am a passionate web developer with over a year of experience in building and maintaining responsive websites. I am skilled in various technologies and always eager to learn more.",
        info: [
            {
                field: "Name",
                value: "Sparsh Shandilya"
            },
            {
                field: "Phone",
                value: "(+91) 92895 97139"
            },
            {
                field: "Experience",
                value: "1+ years"
            },
            {
                field: "Nationality",
                value: "Indian"
            },
            {
                field: "Email",
                value: "sparshshandilya123@gmail.com"
            },
            {
                field: "Freelance",
                value: "Available"
            },
            {
                field: "Languages",
                value: "English, Hindi"
            },
        ]
    }
]
