import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const StatusIndicator = ({ color, text }) => (
  <div className="flex items-center gap-3">
    <span className="relative flex h-3 w-3">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75`} style={{ backgroundColor: color }}></span>
      <span className={`relative inline-flex rounded-full h-3 w-3`} style={{ backgroundColor: color }}></span>
    </span>
    <span className="text-gray-300 text-sm">{text}</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white whitespace-nowrap mr-6">
            <span className="text-primary font-mono text-xl md:text-3xl mr-3">01.</span>
            {portfolioData.about.title}
          </h2>
          <div className="h-px bg-white/10 w-full flex-grow"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Professional Intro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              {portfolioData.about.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-justify">{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Right: Interactive Developer Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-colors duration-500 shadow-2xl z-10">
              
              <div className="flex items-center gap-6 mb-8 border-b border-white/5 pb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-500">
                  <span className="text-4xl font-bold text-white">V</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Developer</h3>
                  <p className="text-primary font-mono text-sm">{portfolioData.hero.name}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-xs text-gray-500 font-mono mb-2 uppercase tracking-wider">Focus</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>Java Backend</li>
                    <li>Full Stack Dev</li>
                    <li>System Design</li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-mono mb-2 uppercase tracking-wider">Environment</p>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>IntelliJ IDEA</li>
                    <li>VS Code</li>
                    <li>Windows</li>
                  </ul>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-500 font-mono mb-4 uppercase tracking-wider">Currently</p>
                <div className="space-y-4">
                  <StatusIndicator color="#10b981" text="Building real-world applications" />
                  <StatusIndicator color="#3b82f6" text="Learning backend architecture" />
                  <StatusIndicator color="#eab308" text="Practicing DSA" />
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
