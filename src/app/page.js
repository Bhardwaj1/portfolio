
export const dynamic = 'force-dynamic'; // disables SSG
import { useEffect, useState } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Loader from './components/Loader';
import Hero from './components/Hero';
import About from './components/About';
import ProfessionalSkills from './components/ProfessionalSkills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Socials from './components/Socials';
import Footer from './components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleLoad = () => {
      setTimeout(() => setLoading(false), 1000);
    };

    if (typeof window !== 'undefined') {
      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
      }
    }
  }, []);

  // Prevent SSR crashes
  if (!mounted) return null;
  if (loading) return <Loader />;

  return (
    <main className="space-y-16 px-4 md:px-10 lg:px-20 py-10">
      <ThemeToggle />
      <Hero />
      <About />
      <ProfessionalSkills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Socials />
      <Footer />
    </main>
  );
}
