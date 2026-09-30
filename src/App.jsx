import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Achievements from './sections/Achievements';
import CodingProfiles from './sections/CodingProfiles';
import ResumeSection from './sections/ResumeSection';
import Contact from './sections/Contact';
import SystemDesign from './sections/SystemDesign';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import EasterEgg from './components/EasterEgg';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/30 selection:text-white relative">
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <div className="noise-bg"></div>
          <div className="fixed inset-0 bg-grid pointer-events-none z-0 opacity-30"></div>
          
          <CustomCursor />
          <ScrollProgress />
          <EasterEgg />
          
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Achievements />
            <SystemDesign />
            <CodingProfiles />
            <ResumeSection />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
