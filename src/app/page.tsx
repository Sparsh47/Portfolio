import ProfilePhoto from "@/components/ProfilePhoto";
import { BiDownload } from "react-icons/bi";
import { homeLinks } from "@/constants/constants";
import HomeLink from "@/components/HomeLink";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-background gap-10 pt-10 px-5 md:px-10 lg:px-20">
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-0">
        <div className="w-full md:w-1/2 text-white flex flex-col items-center md:items-start px-5 py-10 md:py-14">
          <h2 className="capitalize py-3 text-2xl md:text-3xl">
            Software Developer
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center md:text-left">
            Hello I&apos;m
            <br />
            <span className="text-accent">Sparsh Shandilya</span>
          </h1>
          <p className="text-justify py-6 md:py-10 leading-6 md:leading-8 font-light text-base md:text-lg w-full md:w-3/4">
            I&apos;m an innovative Full Stack Developer crafting seamless
            digital experiences with a flair for modern web technologies.
          </p>
          <div className="w-full flex flex-col md:flex-row items-center gap-4 md:gap-8 text-accent">
            <Link
              href="https://drive.google.com/file/d/1Z9mQkle1s0-GzbCWaf77PIhvmi4QBMWo/view"
              className="flex gap-3 text-base items-center border border-accent rounded-full py-3 md:py-4 px-6 transition-all duration-200 ease-in-out hover:bg-accent hover:text-black"
            >
              Download CV
              <BiDownload className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
            <div className="flex items-center gap-5">
              {homeLinks.map((link, index) => (
                <HomeLink key={index} link={link.link} Icon={link.icon} />
              ))}
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center w-full md:w-1/2 max-w-lg md:max-w-lg lg:max-w-xl">
          <ProfilePhoto />
        </div>
      </div>
      <div className="w-full md:w-[72%] grid grid-cols-2 md:flex md:flex-wrap justify-center md:justify-around gap-6 text-white px-5 md:px-0">
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-black">200+</span>
          <span className="text-center md:text-left text-sm md:text-base">
            Code
            <br /> Commits
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-black">50+</span>
          <span className="text-center md:text-left text-sm md:text-base">
            Github
            <br /> Repositories
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-black">10+</span>
          <span className="text-center md:text-left text-sm md:text-base">
            Projects
            <br /> Completed
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-black">5+</span>
          <span className="text-center md:text-left text-sm md:text-base">
            Technologies
            <br /> Mastered
          </span>
        </div>
      </div>
    </div>
  );
}
