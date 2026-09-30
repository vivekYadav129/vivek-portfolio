import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal } from 'lucide-react';

const EasterEgg = () => {
  const [inputSequence, setInputSequence] = useState('');
  const [showEgg, setShowEgg] = useState(false);
  
  const SECRET_CODE = 'vivek';

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only track alphabetical characters to avoid huge strings
      if (e.key.length === 1 && /[a-zA-Z]/.test(e.key)) {
        setInputSequence((prev) => {
          const newSeq = (prev + e.key.toLowerCase()).slice(-SECRET_CODE.length);
          if (newSeq === SECRET_CODE) {
            setShowEgg(true);
            setTimeout(() => setShowEgg(false), 5000); // Hide after 5 seconds
          }
          return newSeq;
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {showEgg && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-8 right-8 z-[120] bg-[#0f172a] border border-primary/30 p-4 rounded-lg shadow-2xl shadow-primary/20 flex items-start gap-4"
        >
          <div className="bg-primary/20 p-2 rounded text-primary mt-1">
            <Terminal size={20} />
          </div>
          <div>
            <h4 className="text-white font-bold font-mono text-sm mb-1">Easter Egg Found!</h4>
            <p className="text-gray-400 text-xs font-mono">
              System.out.println("Thanks for checking out my portfolio! Have a great day!");
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;
