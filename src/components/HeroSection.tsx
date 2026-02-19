import { motion } from "framer-motion";
import { Shield, Terminal, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <Shield className="w-16 h-16 text-primary mx-auto mb-4 drop-shadow-[0_0_15px_hsl(120,100%,50%,0.5)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-4 flex items-center justify-center gap-2 text-muted-foreground text-sm"
        >
          <Terminal className="w-4 h-4" />
          <span className="font-mono">~/rajkumar $</span>
          <span className="neon-text">whoami</span>
          <span className="cursor-blink text-primary">▊</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-wider mb-4 neon-text-strong"
        >
          YARRA RAJKUMAR
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-lg md:text-xl text-secondary font-mono mb-2"
        >
          Cybersecurity Specialist
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-muted-foreground font-mono text-sm md:text-base max-w-2xl mx-auto mb-8"
        >
          Ethical Hacking • Digital Forensics • Malware Analysis • Network Security
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#projects"
            className="px-6 py-3 border border-primary text-primary font-mono text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 neon-border glitch-hover"
          >
            {">"} View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-secondary text-secondary font-mono text-sm hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
          >
            {">"} Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
