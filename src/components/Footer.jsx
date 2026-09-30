import { useState, useEffect } from 'react';
import { Mail, ArrowUp, Code2, Heart, Clock } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080e] border-t border-white/10 pt-16 pb-12 relative overflow-hidden text-sm">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Left: Branding & Status */}
          <div className="text-center md:text-left space-y-2">
            <a href="#hero" className="text-2xl font-bold font-mono text-white tracking-wider flex items-center justify-center md:justify-start gap-2">
              <span className="text-primary">&lt;</span>
              <span>Vivek Yadav</span>
              <span className="text-primary">/&gt;</span>
            </a>
            <p className="text-gray-400 text-xs max-w-sm">
              Java Backend & Full Stack Developer — Building scalable software solutions and web applications.
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={portfolioData.hero.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-xl border border-white/10 transition-colors"
              title="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={portfolioData.hero.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-xl border border-white/10 transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="p-3 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white rounded-xl border border-white/10 transition-colors"
              title="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Right: Back to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="p-3.5 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-xl transition-all flex items-center gap-2 font-mono text-xs hover:scale-105"
            >
              <span>Back to top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-primary" />
            <span>IST (UTC+5:30): {time || '12:00:00'}</span>
          </div>

          <p className="text-center sm:text-right">
            Designed & Built by <span className="text-gray-300 font-medium">Vivek Kumar Yadav</span> • {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

