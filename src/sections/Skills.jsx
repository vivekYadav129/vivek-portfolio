import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Hardcoded advanced tech stack mapping for interactive ecosystem
const techEcosystem = [
  { id: 'react', name: 'React', group: 'Frontend', relations: ['javascript', 'html', 'css', 'tailwind', 'vite'] },
  { id: 'javascript', name: 'JavaScript', group: 'Frontend', relations: ['react', 'html', 'css'] },
  { id: 'html', name: 'HTML5', group: 'Frontend', relations: ['javascript', 'css', 'react'] },
  { id: 'css', name: 'CSS3', group: 'Frontend', relations: ['html', 'javascript', 'tailwind'] },
  { id: 'tailwind', name: 'Tailwind CSS', group: 'Frontend', relations: ['css', 'react'] },
  { id: 'vite', name: 'Vite', group: 'Frontend', relations: ['react', 'javascript'] },
  
  { id: 'java', name: 'Java', group: 'Backend', relations: ['springboot', 'oop', 'sql'] },
  { id: 'springboot', name: 'Spring Boot', group: 'Backend', relations: ['java', 'restapi', 'jwt', 'mysql'] },
  { id: 'restapi', name: 'REST APIs', group: 'Backend', relations: ['springboot', 'postman', 'jwt'] },
  { id: 'jwt', name: 'JWT Auth', group: 'Backend', relations: ['springboot', 'restapi'] },
  
  { id: 'mysql', name: 'MySQL', group: 'Database', relations: ['springboot', 'java', 'sql'] },
  { id: 'mongodb', name: 'MongoDB', group: 'Database', relations: ['react', 'javascript'] },
  
  { id: 'git', name: 'Git', group: 'Tools', relations: ['github'] },
  { id: 'github', name: 'GitHub', group: 'Tools', relations: ['git'] },
  { id: 'postman', name: 'Postman', group: 'Tools', relations: ['restapi', 'springboot'] },
  
  { id: 'dsa', name: 'DSA', group: 'Core', relations: ['java', 'javascript'] },
  { id: 'oop', name: 'OOP', group: 'Core', relations: ['java'] },
  { id: 'sql', name: 'SQL', group: 'Core', relations: ['mysql', 'java'] }
];

const groups = ['Frontend', 'Backend', 'Database', 'Tools', 'Core'];

const Skills = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const getTechStatus = (techId) => {
    if (!hoveredTech) return 'normal';
    if (hoveredTech === techId) return 'hovered';
    
    const hoveredNode = techEcosystem.find(t => t.id === hoveredTech);
    if (hoveredNode && hoveredNode.relations.includes(techId)) return 'related';
    
    return 'dimmed';
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white whitespace-nowrap mr-6">
            <span className="text-primary font-mono text-xl md:text-3xl mr-3">02.</span>
            Technology Ecosystem
          </h2>
          <div className="h-px bg-white/10 w-full flex-grow"></div>
        </motion.div>

        <p className="text-gray-400 mb-12 max-w-2xl text-lg">
          Hover over any technology to explore how it connects within my development stack.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {groups.map((group, gIdx) => (
            <motion.div 
              key={group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gIdx * 0.1 }}
              className="bg-card/30 border border-white/5 rounded-2xl p-6 backdrop-blur-sm"
            >
              <h3 className="text-white font-bold mb-6 font-mono border-b border-white/10 pb-2">{group}</h3>
              <div className="flex flex-col gap-3">
                {techEcosystem
                  .filter(tech => tech.group === group)
                  .map((tech) => {
                    const status = getTechStatus(tech.id);
                    return (
                      <div
                        key={tech.id}
                        onMouseEnter={() => setHoveredTech(tech.id)}
                        onMouseLeave={() => setHoveredTech(null)}
                        className={`
                          relative px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 cursor-default
                          ${status === 'hovered' ? 'bg-primary text-white scale-105 shadow-[0_0_20px_rgba(14,165,233,0.4)] z-10' : ''}
                          ${status === 'related' ? 'bg-primary/20 text-primary border border-primary/30 scale-100 z-10 shadow-[0_0_10px_rgba(14,165,233,0.1)]' : ''}
                          ${status === 'normal' ? 'bg-white/5 text-gray-300 border border-white/5 hover:border-white/20' : ''}
                          ${status === 'dimmed' ? 'bg-white/5 text-gray-600 border border-white/5 opacity-50 scale-95' : ''}
                        `}
                      >
                        {tech.name}
                      </div>
                    );
                  })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
