'use client'
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import ThemeToggle from "./components/ThemeToggle";
import ParticlesBackground from "./components/ParticlesBackground";
import ProfessionalSkills from "./components/ProfessionalSkills";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";

export default function Home() {

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 1000); // simulate delay if needed
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <ParticlesBackground />
      <main className="space-y-16 px-4 md:px-10 lg:px-20 py-10">
        <ThemeToggle />
        <Hero />
        <About />
        <ProfessionalSkills />
        <Projects />
        <Experience />
        <Education />
        <Contact/>
        <Socials />
        <Footer />
      </main>
    </>
  );
}
