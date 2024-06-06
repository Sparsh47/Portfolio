import { BsGithub, BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn, FaHashnode, FaCss3Alt } from "react-icons/fa6";
import { FaHtml5, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiBootstrap, SiReact, SiNextdotjs, SiMongodb, SiMysql, SiSocketdotio, SiReactrouter, SiGraphql, SiDjango, SiFlask } from "react-icons/si";

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
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet nunc lorem. Maecenas a."
    },
    {
        title: "Next.js Development",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet nunc lorem. Maecenas a."
    },
    {
        title: "UI/UX Design",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet nunc lorem. Maecenas a."
    },
    {
        title: "React Native Development",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet nunc lorem. Maecenas a."
    },
]

export const controlOptions = ["Experience", "Skills", "About me"]

export const servicesInfo = [
    {
        title: "My Experience",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet nunc lorem. Maecenas a.",
        exp: [
            {
                date: "04/2024 - Present",
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
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet nunc lorem. Maecenas a.",
        skills: [
            {
                icon: FaHtml5,
                text: "HTML",
            },
            {
                icon: FaCss3Alt,
                text: "CSS",
            },
            {
                icon: SiJavascript,
                text: "Javascript",
            },
            {
                icon: SiTypescript,
                text: "Typescript",
            },
            {
                icon: SiTailwindcss,
                text: "Tailwind CSS",
            },
            {
                icon: SiBootstrap,
                text: "Bootstrap",
            },
            {
                icon: SiReact,
                text: "React.js",
            },
            {
                icon: SiNextdotjs,
                text: "Next.js",
            },
            {
                icon: FaNodeJs,
                text: "Node.js",
            },
            {
                icon: SiMongodb,
                text: "MongoDB",
            },
            {
                icon: SiMysql,
                text: "MySQL",
            },
            {
                icon: SiGraphql,
                text: "GraphQL",
            },
            {
                icon: SiReactrouter,
                text: "React Router",
            },
            {
                icon: SiDjango,
                text: "Django",
            },
            {
                icon: SiFlask,
                text: "Flask",
            }
        ]
    },
    {
        title: "About me",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet nunc lorem. Maecenas a.",
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