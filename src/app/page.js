import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Socials from "./components/Socials";
import ThemeToggle from "./components/ThemeToggle";
import ParticlesBackground from "./components/ParticlesBackground";
import ProfessionalSkills from "./components/ProfessionalSkills";
import Contact from "./components/Contact";

export default function Home() {
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
        <Socials />
        <Contact/>
        <Footer />
      </main>
    </>
  );
}
