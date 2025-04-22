"use client";

import Service from "@/sections/Services";
import Resume from "@/sections/Resume";
import Contact from "@/sections/Contact";
import Home from "@/sections/Home";
import Footer from "@/components/Footer";
import Projects from "@/sections/Projects";
import {useEffect, useState} from "react";
import Loader from "@/components/SiteLoader";

export default function Page() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 4000);
        return () => clearTimeout(timer);
    }, []);

  return (
    <>
        {loading && <Loader onComplete={() => setLoading(false)} />}
        {!loading && (
            <div className="min-h-screen bg-gray-100">
                <div id="home">
                    <Home />
                </div>
                <div id="services">
                    <Service />
                </div>
                <div id="resume">
                    <Resume />
                </div>
                <div id="projects">
                    <Projects />
                </div>
                <div id="contact">
                    <Contact />
                </div>
                <Footer />
            </div>
        )}

    </>
  );
}
