import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Award, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

const Achievements = () => {
  const enhancedAchievements = [
    {
      title: "Full Stack Web Development Internship",
      issuer: "GNCIPL",
      desc: "Successfully built production React & REST API components in an enterprise setting."
    },
    {
      title: "Java Backend Development Internship",
      issuer: "Sysslan IT Solutions",
      desc: "Developed Spring Boot microservices, security layers, and relational DB integration."
    },
    {
      title: "Industrial Training — BLW Indian Railways",
      issuer: "Banaras Locomotive Works",
      desc: "Acquired real-world understanding of large-scale engineering infrastructure & systems."
    },
    {
      title: "Technical Certifications & Problem Solving",
      issuer: "Multiple Platforms",
      desc: "Consistently practicing algorithms on LeetCode and GeeksforGeeks with Java."
    }
  ];

  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap mr-6 flex items-center gap-3">
            <span className="text-primary font-mono text-xl md:text-2xl">07.</span>
            Achievements & Recognition
          </h2>
          <div className="h-px bg-gradient-to-r from-primary/50 via-white/10 to-transparent w-full flex-grow"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {enhancedAchievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/70 border border-white/10 rounded-2xl p-6 hover:border-primary/40 hover:bg-card/90 transition-all duration-300 backdrop-blur-xl flex items-start gap-4 shadow-lg group"
            >
              <div className="p-3 bg-primary/10 border border-primary/20 text-primary rounded-xl shrink-0 group-hover:scale-110 transition-transform">
                <Award size={24} />
              </div>

              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
                <span className="inline-block px-2.5 py-0.5 bg-white/5 text-xs text-primary font-mono rounded border border-white/5 mb-2">
                  {item.issuer}
                </span>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

