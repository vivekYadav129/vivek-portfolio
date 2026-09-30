import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const CaseStudyModal = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors z-10"
          >
            <X size={24} />
          </button>

          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-primary font-mono mb-8">Case Study</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-8 text-gray-300">
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Problem & Solution</h4>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Key Features</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 rounded-md text-sm text-gray-300 border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium w-full">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-colors font-medium w-full">
                      <FaGithub size={18} /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Fallback gradient colors for placeholder images
  const gradients = [
    "from-blue-500/20 to-cyan-500/20",
    "from-purple-500/20 to-pink-500/20",
    "from-emerald-500/20 to-teal-500/20"
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white whitespace-nowrap mr-6">
            <span className="text-primary font-mono text-xl md:text-3xl mr-3">03.</span>
            Featured Projects
          </h2>
          <div className="h-px bg-white/10 w-full flex-grow"></div>
        </motion.div>

        <div className="space-y-32">
          {portfolioData.projects.map((project, index) => (
            <div key={project.id} className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 group">
              
              {/* Project Preview (Image) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`w-full lg:w-7/12 relative ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                {/* Simulated 3D tilt container */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-card border border-white/10 transform transition-transform duration-700 ease-out group-hover:scale-[1.02] shadow-2xl">
                  {/* Image Placeholder / Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
                  
                  {/* Project Abstract Visual */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-transform duration-700 group-hover:scale-105">
                    <span className="text-6xl font-bold text-white/10 mb-4">{project.title.split(' ')[0]}</span>
                    <div className="w-24 h-1 bg-primary/30 rounded-full mb-4"></div>
                    <div className="w-16 h-1 bg-white/10 rounded-full"></div>
                  </div>
                </div>
              </motion.div>

              {/* Project Info */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className={`w-full lg:w-5/12 relative z-20 ${index % 2 === 1 ? 'lg:order-1 lg:text-left' : 'lg:text-left'}`}
              >
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-mono mb-4">Featured Project</div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                
                <p className="text-gray-400 text-base leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 rounded-md text-xs text-gray-300 font-mono border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-semibold"
                  >
                    View Case Study
                  </button>
                  
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedProject && (
        <CaseStudyModal 
          project={selectedProject} 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
