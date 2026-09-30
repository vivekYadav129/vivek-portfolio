import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const OrbitingTech = ({ text, radius, duration, delay, angleOffset }) => (
  <motion.div
    className="absolute top-1/2 left-1/2 flex items-center justify-center bg-card border border-white/10 px-4 py-2 rounded-full text-xs font-mono text-primary shadow-lg shadow-primary/10 whitespace-nowrap"
    style={{ transformOrigin: 'center' }}
    animate={{
      rotate: [0 + angleOffset, 360 + angleOffset],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: "linear",
      delay: delay
    }}
  >
    <motion.div
      animate={{
        rotate: [-(0 + angleOffset), -(360 + angleOffset)],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        delay: delay
      }}
      style={{
        transform: `translate(${radius}px, 0px)`
      }}
    >
      {text}
    </motion.div>
  </motion.div>
);

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[150px] -z-10 mix-blend-screen"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-[120px] -z-10 mix-blend-screen"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-mono mb-6 inline-block"
            >
              System.out.println("Hello World");
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Vivek Yadav</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-4xl font-bold text-primary mb-6"
            >
              {portfolioData.hero.role}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed"
            >
              I build modern web applications, scalable APIs, and practical software solutions using Java, Spring Boot, React, and modern technologies.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 group shadow-lg shadow-primary/20"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={portfolioData.hero.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white border border-white/10 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-12 flex items-center gap-6"
            >
              <a
                href={portfolioData.hero.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
              <a
                href={portfolioData.hero.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
            </motion.div>
          </div>

          {/* Right: Orbiting Visual */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:flex relative h-[500px] w-full items-center justify-center"
          >
            {/* Center Core */}
            <div className="absolute z-20 flex flex-col items-center justify-center w-32 h-32 bg-card border border-primary/30 rounded-full shadow-[0_0_50px_rgba(14,165,233,0.3)]">
               <span className="text-4xl">💻</span>
            </div>

            {/* Orbit Rings */}
            <div className="absolute w-[250px] h-[250px] border border-white/5 rounded-full" />
            <div className="absolute w-[400px] h-[400px] border border-white/5 rounded-full" />

            {/* Orbiting Elements */}
            <OrbitingTech text="Java" radius={125} duration={15} delay={0} angleOffset={0} />
            <OrbitingTech text="Spring Boot" radius={125} duration={15} delay={0} angleOffset={180} />
            
            <OrbitingTech text="React" radius={200} duration={25} delay={0} angleOffset={45} />
            <OrbitingTech text="MongoDB" radius={200} duration={25} delay={0} angleOffset={135} />
            <OrbitingTech text="REST API" radius={200} duration={25} delay={0} angleOffset={225} />
            <OrbitingTech text="Git" radius={200} duration={25} delay={0} angleOffset={315} />

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
