"use client";

import { useState } from "react";
import gsap from "gsap";
import NavLink from "./NavLink";
import { navLinks } from "@/constants/constants";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleHover = (event: any) => {
    const div = event.currentTarget.querySelector(".animate");
    gsap.to(div, { width: "100%", duration: 0.3 });
  };

  const handleHoverOut = (event: any) => {
    const div = event.currentTarget.querySelector(".animate");
    gsap.to(div, { width: 0, duration: 0.3 });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-20 py-5 z-10 bg-transparent">
      <Link href="/" className="text-white font-black text-2xl md:text-4xl">
        Sparshy<span className="text-accent">.</span>
      </Link>
      <div className="flex items-center justify-center md:gap-10 text-white">
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              onClick={toggleMenu}
              handleHover={handleHover}
              handleHoverOut={handleHoverOut}
              link={link}
            />
          ))}
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute w-full px-5 text-white top-16 left-0 bg-background rounded-xl border border-accent flex flex-col items-center gap-4 py-5 md:hidden">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              onClick={toggleMenu}
              handleHover={handleHover}
              handleHoverOut={handleHoverOut}
              link={link}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
