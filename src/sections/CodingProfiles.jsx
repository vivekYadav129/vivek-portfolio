import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Code, GitCommit, Terminal, ExternalLink, CheckCircle2, Award, Cpu, Star } from 'lucide-react';
import { FaGithub, FaCode, FaCheckSquare } from 'react-icons/fa';

const profiles = [
  {
    id: 'github',
    name: 'GitHub',
    icon: FaGithub,
    username: '@vivekYadav129',
    url: portfolioData.hero.githubUrl,
    color: 'from-gray-700 to-gray-900',
    accentColor: 'text-white',
    badgeColor: 'border-white/20 bg-white/5',
    stats: [
      { label: 'Repositories', value: '15+' },
      { label: 'Main Tech', value: 'Java / React' },
      { label: 'Contributions', value: 'Active' },
    ],
    command: 'curl -s https://api.github.com/users/vivekYadav129',
    output: `{
  "login": "vivekYadav129",
  "name": "Vivek Kumar Yadav",
  "bio": "Java Backend & Full Stack Developer | Spring Boot | React.js",
  "public_repos": 15,
  "top_languages": ["Java", "JavaScript", "HTML", "CSS"],
  "status": "Available for Software Engineering roles"
}`
  },
  {
    id: 'leetcode',
    name: 'LeetCode',
    icon: Code,
    username: 'vivekYadav129',
    url: 'https://leetcode.com/u/vivekYadav129/',
    color: 'from-yellow-600/30 to-amber-900/40',
    accentColor: 'text-yellow-400',
    badgeColor: 'border-yellow-500/20 bg-yellow-500/10 text-yellow-400',
    stats: [
      { label: 'Problems Solved', value: '150+' },
      { label: 'DSA Focus', value: 'Arrays, Strings, Trees' },
      { label: 'Language', value: 'Java' },
    ],
    command: 'leetcode stats --user vivekYadav129',
    output: `[LeetCode Statistics]
User: vivekYadav129
----------------------------------------
✓ Easy Problems    : 80+
✓ Medium Problems  : 60+
✓ Hard Problems    : 10+
Primary Language   : Java
Key Topics         : Arrays, Hash Table, Dynamic Programming, Two Pointers`
  },
  {
    id: 'gfg',
    name: 'GeeksforGeeks',
    icon: Terminal,
    username: 'vivekYadav129',
    url: 'https://www.geeksforgeeks.org/user/vivekYadav129/',
    color: 'from-emerald-700/30 to-green-950/40',
    accentColor: 'text-emerald-400',
    badgeColor: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-400',
    stats: [
      { label: 'Coding Score', value: '300+' },
      { label: 'Core Topics', value: 'Java & Algorithms' },
      { label: 'Practice', value: 'Consistent' },
    ],
    command: 'gfg --profile vivekYadav129',
    output: `[GeeksforGeeks Profile]
User Handle     : vivekYadav129
Institute       : UIET CSJMU Kanpur
Problem Category: Data Structures & Algorithms
Language        : Java
Status          : Active Practice`
  }
];

const CodingProfiles = () => {
  const [activeTab, setActiveTab] = useState('github');
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const activeProfile = profiles.find(p => p.id === activeTab) || profiles[0];

  useEffect(() => {
    let index = 0;
    const fullText = activeProfile.output;
    setDisplayedText('');
    setIsTyping(true);

    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(prev => prev + fullText.charAt(index));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 12);

    return () => clearInterval(timer);
  }, [activeTab]);

  return (
    <section id="coding" className="py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white whitespace-nowrap mr-6 flex items-center gap-3">
            <span className="text-primary font-mono text-xl md:text-2xl">08.</span>
            Competitive & Coding Profiles
          </h2>
          <div className="h-px bg-gradient-to-r from-primary/50 via-white/10 to-transparent w-full flex-grow"></div>
        </motion.div>

        {/* Outer Terminal Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card/90 border border-white/15 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl"
        >
          {/* Terminal Window Header Bar */}
          <div className="bg-[#0f141d] px-6 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
              <span className="ml-3 font-mono text-xs text-gray-400 flex items-center gap-2">
                <Terminal size={14} className="text-primary" />
                vivek@dev-terminal:~/{activeTab}
              </span>
            </div>

            {/* Profile Tab Selector */}
            <div className="flex items-center gap-1.5 bg-black/40 p-1 rounded-lg border border-white/5">
              {profiles.map((profile) => {
                const IconComponent = profile.icon;
                const isActive = activeTab === profile.id;
                return (
                  <button
                    key={profile.id}
                    onClick={() => setActiveTab(profile.id)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-200 ${
                      isActive
                        ? 'bg-primary/20 text-white border border-primary/40 shadow-[0_0_10px_rgba(6,182,212,0.3)]'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <IconComponent size={14} className={isActive ? profile.accentColor : ''} />
                    <span>{profile.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Terminal Body Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[360px]">
            {/* Left: Terminal Output / Live Typing Command Prompt */}
            <div className="lg:col-span-7 bg-[#090d14] p-6 font-mono text-xs sm:text-sm flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 relative">
              <div>
                <div className="flex items-center gap-2 text-primary mb-3">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-accent">~</span>
                  <span className="text-gray-300">{activeProfile.command}</span>
                </div>

                <pre className="text-gray-300 font-mono leading-relaxed whitespace-pre-wrap overflow-x-auto selection:bg-primary/40">
                  {displayedText}
                  {isTyping && <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse"></span>}
                </pre>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Status: Connected
                </span>
                <span className="font-mono">Encoding: UTF-8</span>
              </div>
            </div>

            {/* Right: Detailed Profile Stats & CTA */}
            <div className="lg:col-span-5 p-8 flex flex-col justify-between bg-card/40">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-mono border ${activeProfile.badgeColor} mb-2`}>
                      {activeProfile.username}
                    </span>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      {activeProfile.name}
                    </h3>
                  </div>

                  <a
                    href={activeProfile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 hover:bg-primary/20 text-gray-300 hover:text-white rounded-xl border border-white/10 transition-colors group"
                    title={`Visit ${activeProfile.name} Profile`}
                  >
                    <ExternalLink size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                </div>

                {/* Stats list */}
                <div className="space-y-3 mb-8">
                  {activeProfile.stats.map((stat, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                      <span className="text-xs text-gray-400">{stat.label}</span>
                      <span className="text-sm font-bold font-mono text-white">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link Button */}
              <a
                href={activeProfile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-gradient-to-r from-primary to-cyan-600 hover:from-primary/90 hover:to-cyan-500 text-white rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all hover:scale-[1.02]"
              >
                <span>Explore {activeProfile.name} Profile</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfiles;

