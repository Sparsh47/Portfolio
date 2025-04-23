"use client";

import React, { FC, useLayoutEffect, useRef } from "react";
import { BiDownload } from "react-icons/bi";
import HomeLink from "../components/HomeLink";
import ProfilePhoto from "../components/ProfilePhoto";
import Link from "next/link";
import { homeLinks } from "@/constants/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 0.6, ease: "power2.out" },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl
          .from(".home-subtitle", { y: 30, opacity: 0 })
          .from(".home-title", { y: 30, opacity: 0 }, "-=0.4")
          .from(".home-text", { y: 30, opacity: 0 }, "-=0.4")
          .from(
              ".home-button",
              { scale: 0.8, opacity: 0, stagger: 0.1, ease: "back.out(1.7)" },
              "-=0.3"
          )
          .from(".home-photo", { scale: 0.8, opacity: 0 }, "-=0.4")
          .from(
              ".home-stat",
              { y: 20, opacity: 0, stagger: 0.1 },
              "-=0.4"
          );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
      <div
          ref={containerRef}
          className="w-full min-h-screen flex flex-col items-center justify-center bg-background gap-10 px-5 pt-10 md:px-10 lg:px-20"
      >
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0">
          <div className="w-full md:w-1/2 text-white flex flex-col items-center md:items-start px-5 py-10 md:py-14">
            <h2 className="home-subtitle capitalize py-3 text-2xl md:text-3xl">
              Software Developer
            </h2>
            <h1 className="home-title text-4xl md:text-5xl lg:text-6xl font-semibold text-center md:text-left">
              Hello I&apos;m
              <br />
              <span className="text-accent">Sparsh Shandilya</span>
            </h1>
            <p className="home-text text-justify py-6 md:py-10 leading-6 md:leading-8 font-light text-base md:text-lg w-full md:w-3/4">
              I&apos;m an innovative Full Stack Developer crafting seamless
              digital experiences with a flair for modern web technologies.
            </p>
            <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-8 text-accent">
              <div className="home-button flex items-center gap-5">
                <Link
                    href="https://drive.google.com/file/d/1KJhqJtLeJv39wbtjfM3T4iyJ2HD4ZCpR/view?usp=sharing"
                    className="flex gap-3 text-base items-center border border-accent rounded-full py-3 md:py-4 px-6 transition-all duration-200 ease-in-out hover:bg-accent hover:text-black"
                >
                  Download CV
                  <BiDownload className="w-5 h-5 md:w-6 md:h-6" />
                </Link>
                {homeLinks.map((link, index) => (
                    <HomeLink key={index} link={link.link} Icon={link.icon} />
                ))}
              </div>
            </div>
          </div>
          <div className="home-photo hidden md:flex justify-center items-center w-full md:w-1/2 max-w-lg md:max-w-lg lg:max-w-xl">
            <ProfilePhoto />
          </div>
        </div>

        <div className="w-full md:w-[72%] grid grid-cols-2 md:flex md:flex-wrap justify-center md:justify-around gap-6 text-white px-5 md:px-0">
          {[
            { value: "200+", label: "Code\nCommits" },
            { value: "50+", label: "Github\nRepositories" },
            { value: "10+", label: "Projects\nCompleted" },
            { value: "5+", label: "Technologies\nMastered" },
          ].map((stat, idx) => (
              <div key={idx} className="home-stat flex flex-col md:flex-row gap-3 items-center text-center">
                <span className="text-4xl md:text-5xl font-black">{stat.value}</span>
                <span className="text-sm md:text-base whitespace-pre-line">
              {stat.label}
            </span>
              </div>
          ))}
        </div>
      </div>
  );
};

export default Home;
