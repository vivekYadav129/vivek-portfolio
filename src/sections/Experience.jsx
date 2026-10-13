import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, ChevronRight, Sparkles } from 'lucide-react';

const Experience = () => {
  const [activeExp, setActiveExp] = useState(null);

  // Extend data with contextual tech tags while preserving original content
  const experienceData = [
    {
      ...portfolioData.experience[0],
      duration: "Sep 2026 - Oct 2026",
      location: "India (Remote/Onsite)",
      tags: ["React.js", "Java", "REST APIs", "Node.js", "MongoDB", "Full Stack"],
      highlights: [
        "Architected responsive full-stack features using React and REST APIs.",
        "Optimized backend queries and database schemas for seamless performance.",
        "Collaborated on production web deployments and agile sprint workflows."
      ]
    },
    {
      ...portfolioData.experience[1],
      duration: "March 2026 – May 2026",
      location: "India",
      tags: ["Java", "Spring Boot", "REST APIs", "MySQL", "JWT", "Microservices"],
      highlights: [
        "Developed enterprise backend microservices with Spring Boot.",
        "Implemented secure JWT authentication and role-based access control.",
        "Designed relational database schemas and optimized RESTful endpoints."
      ]
    },
    {
      ...portfolioData.experience[2],
      duration: "Jun 2025 – Jul 2025",
      location: "Varanasi, UP",
      tags: ["Industrial Engineering", "Operations", "Systems Engineering", "Automation"],
      highlights: [
        "Studied locomotive manufacturing workflows and industrial control systems.",
        "Observed automated production lines and safety infrastructure."
      ]
    }
  ];

  return (
    <section id="experience" className="py-28 relative">
      {/* Glow ambient background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap mr-6 flex items-center gap-3">
            <span className="text-primary font-mono text-xl md:text-2xl">04.</span>
            Professional Experience
          </h2>
          <div className="h-px bg-gradient-to-r from-primary/50 via-white/10 to-transparent w-full flex-grow"></div>
        </motion.div>

        {/* Vertical Timeline Container */}
        <div className="relative pl-6 md:pl-0">
          {/* Central vertical line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/60 via-accent/40 to-transparent shadow-[0_0_10px_rgba(6,182,212,0.3)]"></div>

          <div className="space-y-12">
            {experienceData.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  onMouseEnter={() => setActiveExp(exp.id)}
                  onMouseLeave={() => setActiveExp(null)}
                  className="relative flex flex-col md:flex-row items-start group"
                >
                  {/* Timeline Dot Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 z-20 flex items-center justify-center">
                    <div className={`w-10 h-10 rounded-full bg-background border-2 transition-all duration-300 flex items-center justify-center ${
                      activeExp === exp.id 
                        ? 'border-primary shadow-[0_0_20px_rgba(6,182,212,0.8)] scale-110' 
                        : 'border-white/20 group-hover:border-primary/60'
                    }`}>
                      <Briefcase size={16} className={activeExp === exp.id ? 'text-primary' : 'text-gray-400'} />
                    </div>
                  </div>

                  {/* Card Content Layout */}
                  <div className={`w-full md:w-[calc(50%-2.5rem)] pl-12 md:pl-0 ${
                    isEven ? 'md:mr-auto md:pr-4 md:text-right' : 'md:ml-auto md:pl-4 md:text-left'
                  }`}>
                    <div className={`bg-card/70 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-primary/50 transition-all duration-300 shadow-xl group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden ${
                      activeExp === exp.id ? 'bg-card/90 ring-1 ring-primary/30' : ''
                    }`}>
                      {/* Accent highlight corner line */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent pointer-events-none rounded-bl-full"></div>

                      <div className={`flex flex-col mb-4 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary font-mono text-xs rounded-full border border-primary/20 mb-2">
                          <Calendar size={12} />
                          {exp.duration}
                        </span>

                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <h4 className="text-base sm:text-lg text-gray-300 font-medium flex items-center gap-2 mt-1">
                          {exp.company}
                          {exp.location && (
                            <span className="text-xs text-gray-500 font-normal flex items-center gap-1">
                              <MapPin size={12} /> {exp.location}
                            </span>
                          )}
                        </h4>
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Bullet Highlights */}
                      {exp.highlights && (
                        <div className="space-y-2 mb-6">
                          {exp.highlights.map((item, hIdx) => (
                            <div key={hIdx} className={`flex items-start gap-2 text-xs text-gray-300 ${isEven ? 'md:flex-row-reverse md:text-right' : ''}`}>
                              <ChevronRight size={14} className="text-primary shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Tags */}
                      <div className={`flex flex-wrap gap-1.5 pt-4 border-t border-white/5 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        {exp.tags.map((tag, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="px-2.5 py-1 bg-white/5 hover:bg-primary/20 text-gray-300 hover:text-white text-xs rounded-md font-mono border border-white/5 transition-colors cursor-default"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

