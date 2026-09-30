import { motion } from 'framer-motion';
import { Database, Server, MonitorSmartphone, ArrowDown, Cpu, Layers } from 'lucide-react';

const ArchitectureNode = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="relative group bg-card/50 backdrop-blur-sm border border-white/10 p-6 rounded-2xl w-full max-w-sm mx-auto hover:border-primary/50 transition-all duration-300 z-10"
  >
    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
    <div className="flex items-center gap-4 relative z-10">
      <div className="bg-primary/20 p-3 rounded-xl text-primary">
        <Icon size={28} />
      </div>
      <div>
        <h4 className="text-white font-bold text-lg">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  </motion.div>
);

const DataPacket = ({ delay }) => (
  <motion.div
    className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_#0ea5e9]"
    initial={{ top: "0%", opacity: 0 }}
    animate={{ 
      top: ["0%", "50%", "100%"],
      opacity: [0, 1, 0]
    }}
    transition={{ 
      duration: 2, 
      repeat: Infinity, 
      delay: delay,
      ease: "linear"
    }}
  />
);

const FlowArrow = () => (
  <div className="relative h-16 w-px bg-white/20 mx-auto my-2">
    <DataPacket delay={0} />
    <DataPacket delay={1} />
    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-white/20">
      <ArrowDown size={16} />
    </div>
  </div>
);

const SystemDesign = () => {
  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 -translate-y-1/2" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-4">Architecture</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">How I Think About Applications</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building scalable, maintainable systems is just as important as writing clean code. 
            Here is a high-level view of my preferred full-stack architecture.
          </p>
        </motion.div>

        <div className="py-8">
          <ArchitectureNode 
            icon={MonitorSmartphone} 
            title="Client / UI" 
            description="React Frontend (Vite, Tailwind, Framer Motion)" 
            delay={0.1}
          />
          <FlowArrow />
          <ArchitectureNode 
            icon={Server} 
            title="API Gateway / Controllers" 
            description="Spring Boot REST API (JWT Auth, DTOs)" 
            delay={0.2}
          />
          <FlowArrow />
          <ArchitectureNode 
            icon={Layers} 
            title="Business Logic" 
            description="Spring Services (Transactions, Business Rules)" 
            delay={0.3}
          />
          <FlowArrow />
          <ArchitectureNode 
            icon={Database} 
            title="Data Layer" 
            description="MySQL / MongoDB (Spring Data JPA, Repositories)" 
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default SystemDesign;
