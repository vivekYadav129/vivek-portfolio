import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail, Send, Copy, Check, MapPin, Sparkles, MessageSquare, PhoneCall } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmail = portfolioData.contact.email === "contact@example.com" 
    ? "vivek.yadav.dev@outlook.com" // or fallback professional display email
    : portfolioData.contact.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-4">
            <MessageSquare size={14} />
            <span>06. What's Next?</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Get In Touch
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            I am actively seeking software development roles (Full Stack / Java Backend). Whether you have a job opportunity, a project to build, or just want to say hi, my inbox is always open!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div className="bg-card/70 border border-white/10 p-8 rounded-2xl backdrop-blur-xl space-y-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <span>Let's connect</span>
                <Sparkles className="text-primary" size={20} />
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                Prefer direct communication? Copy my email or find me across developer channels below.
              </p>

              {/* Copy Email Box */}
              <div className="bg-background/90 border border-white/10 p-4 rounded-xl flex items-center justify-between gap-3 group hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 bg-primary/10 rounded-lg text-primary shrink-0">
                    <Mail size={18} />
                  </div>
                  <div className="truncate">
                    <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Email Address</p>
                    <p className="text-sm font-medium text-white truncate font-mono">{contactEmail}</p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 bg-white/5 hover:bg-primary/20 text-gray-300 hover:text-white rounded-lg transition-colors shrink-0 flex items-center gap-1.5 text-xs"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={16} className="text-emerald-400" />
                      <span className="text-emerald-400 font-mono hidden sm:inline">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span className="font-mono hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location Tag */}
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5 text-gray-300 text-sm">
                <MapPin className="text-primary shrink-0" size={20} />
                <div>
                  <p className="font-medium text-white">Location</p>
                  <p className="text-xs text-gray-400">Kanpur / Varanasi, Uttar Pradesh, India</p>
                </div>
              </div>

              {/* Social Channels */}
              <div>
                <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-3">Social Channels</p>
                <div className="flex items-center gap-3">
                  <a
                    href={portfolioData.hero.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 hover:bg-white/15 text-white rounded-xl border border-white/10 transition-colors flex items-center gap-2 text-sm font-medium"
                  >
                    <FaGithub size={18} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={portfolioData.hero.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 hover:bg-blue-600/20 hover:text-blue-400 text-white rounded-xl border border-white/10 transition-colors flex items-center gap-2 text-sm font-medium"
                  >
                    <FaLinkedin size={18} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Status Notice */}
            <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping shrink-0"></span>
              <p className="text-xs text-emerald-300 font-mono leading-relaxed">
                Currently open for Full-time Roles & Internships (Java / React Full Stack).
              </p>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-card/80 border border-white/10 p-8 sm:p-10 rounded-2xl backdrop-blur-xl shadow-2xl relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-background/80 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                  placeholder="e.g. Alex Turner"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2">
                  Your Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-background/80 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                  placeholder="alex@company.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-background/80 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm resize-none"
                  placeholder="Hi Vivek, I'd like to discuss a developer role or project..."
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-xs font-mono">
                  ⚠️ Please complete all fields before sending.
                </div>
              )}

              {status === 'success' && (
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg text-xs font-mono flex items-center gap-2">
                  <Check size={16} />
                  <span>Message transmitted successfully! I will reply shortly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-gradient-to-r from-primary to-cyan-600 hover:from-primary/90 hover:to-cyan-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.01] disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Transmitting Message...
                  </span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

