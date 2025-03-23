import Service from "@/sections/Services";
import Resume from "@/sections/Resume";
import Contact from "@/sections/Contact";
import Home from "@/sections/Home";
import Footer from "@/components/Footer";
import Projects from "@/sections/Projects";

export default function page() {
  return (
    <>
      <div id="home">
        <Home />
      </div>
      <div id="services">
        <Service />
      </div>
      <div id="resume">
        <Resume />
      </div>
    <div id="#projects">
        <Projects />
    </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}
