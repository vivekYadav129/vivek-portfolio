import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Download, FileText, ExternalLink, X, Check, Eye } from 'lucide-react';

const ResumeSection = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <section id="resume" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card/80 border border-primary/30 rounded-3xl p-8 sm:p-14 relative overflow-hidden backdrop-blur-xl shadow-2xl group hover:border-primary/50 transition-all duration-500"
        >
          {/* Animated Glow Backdrops */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/20 rounded-full blur-[90px] group-hover:bg-primary/30 transition-all pointer-events-none"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/20 rounded-full blur-[90px] group-hover:bg-accent/30 transition-all pointer-events-none"></div>

          <div className="relative z-10">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono mb-6">
              <FileText size={14} />
              <span>Official Resume Document</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ready to collaborate or hire?
            </h2>
            
            <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Explore my complete professional background, key technical achievements, project implementations, and educational history in my clean 1-page resume.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <a
                href={portfolioData.hero.resumePath}
                download="Vivek-Kumar-Yadav-Resume.pdf"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary to-cyan-600 hover:from-primary/90 hover:to-cyan-500 text-white rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-primary/25 hover:scale-[1.03]"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => setIsPreviewOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.03]"
              >
                <Eye size={20} className="text-primary" />
                <span>Live Preview</span>
              </button>
            </div>

            {/* Document stats footer */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Format: PDF Document
              </span>
              <span>•</span>
              <span>Updated: 2024 / 2025</span>
              <span>•</span>
              <span>Verified Developer CV</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal Lightbox Preview */}
      <AnimatePresence>
        {isPreviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsPreviewOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-white/20 rounded-2xl w-full max-w-4xl h-[85vh] flex flex-col shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="bg-[#0f141d] px-6 py-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="text-primary" size={20} />
                  <span className="font-bold text-white text-base">Vivek Kumar Yadav — Resume Preview</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={portfolioData.hero.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-lg transition-colors flex items-center gap-1.5 text-xs font-mono"
                  >
                    <ExternalLink size={14} />
                    <span>Open in tab</span>
                  </a>
                  <button
                    onClick={() => setIsPreviewOpen(false)}
                    className="p-2 bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 rounded-lg transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal Body Frame */}
              <div className="flex-grow bg-[#1a1f2c] relative">
                <iframe
                  src={portfolioData.hero.resumePath}
                  className="w-full h-full border-none"
                  title="Vivek Kumar Yadav Resume"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ResumeSection;

