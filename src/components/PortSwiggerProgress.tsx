import { motion } from "framer-motion";
import { Terminal, CheckCircle2 } from "lucide-react";

const completedTopics = [
  "SQL Injection",
  "Authentication",
  "Access Control",
  "Cross-Site Scripting (XSS)",
  "JSON Web Tokens (JWT)",
  "Server-Side Request Forgery (SSRF)",
];

const PortSwiggerProgress = () => {
  const totalLabs = 100;
  const completedLabs = 50;
  const percentage = (completedLabs / totalLabs) * 100;

  // Custom ASCII progress bar representation: 10 completed chars, 10 empty
  const barLength = 20;
  const completedChars = Math.round((completedLabs / totalLabs) * barLength);
  const emptyChars = barLength - completedChars;
  const asciiBar = "█".repeat(completedChars) + "░".repeat(emptyChars);

  return (
    <div className="border border-primary/20 bg-card p-6 rounded shadow-md relative group hover:border-primary/40 transition-all duration-300">
      {/* Title */}
      <div className="flex items-center gap-2 mb-4">
        <Terminal className="w-5 h-5 text-primary" />
        <h3 className="font-display text-sm tracking-wider text-primary group-hover:neon-text transition-all">
          PORTSWIGGER ACADEMY PROGRESS
        </h3>
      </div>

      {/* Progress Bar Display */}
      <div className="mb-6 font-mono text-xs md:text-sm">
        <div className="flex justify-between mb-1.5 font-bold">
          <span className="text-secondary">Progress Tracker</span>
          <span className="text-primary">{completedLabs} / {totalLabs} Labs</span>
        </div>

        {/* ASCII Bar visualizer */}
        <div className="text-primary tracking-widest break-all select-none text-[10px] md:text-xs mb-3 font-semibold">
          {asciiBar}
        </div>

        {/* CSS progress bar */}
        <div className="w-full bg-muted h-2 border border-border overflow-hidden rounded-sm">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-primary h-full shadow-[0_0_10px_#22c55e]"
          />
        </div>
      </div>

      {/* Completed Topics list */}
      <div className="space-y-2 pt-2 border-t border-border/50">
        <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
          Completed Modules
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
          {completedTopics.map((topic) => (
            <div key={topic} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="truncate">{topic}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortSwiggerProgress;
