import { motion } from "framer-motion";
import { Terminal, ChevronDown, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePic from "@/assets/profile.jpg";

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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-32 h-32 md:w-36 md:h-36 mx-auto mb-6 shrink-0"
        >
          {/* Pulsing neon halo */}
          <div className="absolute inset-0 rounded-full border border-primary/40 animate-ping opacity-20" />
          
          {/* Circular avatar wrapper */}
          <div className="w-full h-full rounded-full border border-primary p-1 bg-background/80 overflow-hidden shadow-[0_0_20px_rgba(34,197,94,0.25)] hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-shadow duration-300">
            <img 
              src={profilePic} 
              alt="Yarra Rajkumar" 
              className="w-full h-full object-cover rounded-full"
            />
          </div>
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

        {/* Highlighted achievement badge */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mx-auto mb-3 inline-flex items-center gap-3 bg-gradient-to-r from-emerald-700/10 to-emerald-700/5 border border-emerald-600/20 rounded-full px-3 py-1 neon-border shadow-[0_8px_30px_rgba(34,197,94,0.06)]"
        >
          <span className="text-emerald-400 font-bold">🏆</span>
          <span className="text-[13px] font-mono text-emerald-300 font-semibold animate-pulse">NEW – NASSCOM Certified Cyber Security Professional (July 2026)</span>
          <span className="ml-2 px-2 py-0.5 text-[10px] bg-emerald-500/90 text-background rounded-full font-mono">Govt. Approved</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-lg md:text-2xl text-secondary font-mono mb-2"
        >
          Junior Application Security Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-muted-foreground font-mono text-sm md:text-base max-w-2xl mx-auto mb-6 tracking-wide"
        >
          Web Application Security • VAPT • Security Research
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10 text-left font-mono text-xs"
        >
          {[
            "50+ PortSwigger Labs",
            "14+ Responsible Disclosures",
            "Junior Security Analyst Intern",
            "Web Application Security",
          ].map((text, idx) => (
            <div key={idx} className="border border-primary/20 bg-primary/5 p-2.5 flex items-start gap-1.5 rounded shadow-sm hover:border-primary/45 transition-colors">
              <span className="text-primary font-bold">✓</span>
              <span className="text-muted-foreground leading-snug">{text}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex gap-4 justify-center items-center flex-wrap"
        >
          <a
            href="#projects"
            className="px-6 py-3 border border-primary text-primary font-mono text-sm hover:bg-primary/10 transition-all duration-300 neon-border glitch-hover"
          >
            {">"} View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-secondary text-secondary font-mono text-sm hover:bg-secondary/10 transition-all duration-300"
          >
            {">"} Contact Me
          </a>
          <a
            href="/rajkumar_resume.pdf"
            download
            className="px-6 py-2 bg-primary text-primary-foreground font-mono text-sm hover:bg-primary/95 transition-all duration-300 flex flex-col items-center justify-center gap-0.5 neon-border text-center min-w-[160px]"
          >
            <span className="text-[10px] tracking-widest text-primary-foreground/75 uppercase leading-none">ATS Resume</span>
            <span className="text-[9px] text-primary-foreground/60 leading-none">Updated July 2026</span>
            <span className="flex items-center gap-1 mt-0.5 font-bold leading-none">
              <Download className="w-3.5 h-3.5" /> Download PDF
            </span>
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
