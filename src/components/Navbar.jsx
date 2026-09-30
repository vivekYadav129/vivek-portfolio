import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Section intersection logic for active state
      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[110] transition-all duration-300 ${scrolled ? 'bg-[#050505]/70 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-10">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-bold text-white tracking-widest font-mono">
              VIVEK YADAV
            </a>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-2 py-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 bg-white/10 rounded-full -z-10" />
                    )}
                    {link.name}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="hidden lg:flex items-center">
            <a
              href={portfolioData.hero.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white border border-primary/20 transition-all text-sm font-medium interactive"
            >
              Resume
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 border-b border-white/10 bg-[#050505]/95 backdrop-blur-xl' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={portfolioData.hero.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full gap-2 px-4 py-3 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
            >
              <FileText size={18} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
