import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educationList = [
    {
      ...portfolioData.education[0],
      gpa: "Final Year B.Tech",
      location: "Kanpur, UP",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Object-Oriented Programming (Java)",
        "Operating Systems",
        "Software Engineering",
        "Computer Networks"
      ]
    }
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap mr-6 flex items-center gap-3">
            <span className="text-primary font-mono text-xl md:text-2xl">05.</span>
            Education
          </h2>
          <div className="h-px bg-gradient-to-r from-primary/50 via-white/10 to-transparent w-full flex-grow"></div>
        </motion.div>

        <div className="space-y-8">
          {educationList.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/80 border border-white/10 rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 backdrop-blur-xl shadow-xl group relative overflow-hidden"
            >
              {/* Subtle top edge glow */}
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="p-4 bg-primary/10 border border-primary/20 rounded-2xl text-primary shrink-0 group-hover:scale-105 transition-transform">
                  <GraduationCap size={36} />
                </div>
                
                <div className="flex-grow space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full mb-2 border border-primary/20">
                        <Calendar size={12} /> {edu.duration}
                      </span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg text-gray-200 font-medium">{edu.institution}</h4>
                      <p className="text-gray-400 text-sm">{edu.university}</p>
                    </div>

                    {edu.location && (
                      <div className="flex items-center gap-1 text-xs text-gray-400 font-mono">
                        <MapPin size={14} className="text-primary" />
                        <span>{edu.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Core Coursework Badges */}
                  {edu.coursework && (
                    <div className="pt-4 border-t border-white/5">
                      <p className="text-xs font-mono text-gray-400 mb-3 flex items-center gap-1.5">
                        <BookOpen size={14} className="text-primary" /> Key Relevant Coursework:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-3 py-1 bg-white/5 border border-white/5 hover:border-white/20 text-gray-300 text-xs rounded-lg font-mono transition-colors"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

