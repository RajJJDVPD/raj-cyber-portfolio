import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";

const completedCategories = [
  "Web Exploitation",
  "Cryptography",
  "Forensics",
  "Reverse Engineering",
  "Binary Exploitation",
  "General Skills",
];

const CyLabProgress = () => {
  const completedCtfs = 22;
  const targetCtfs = 50; // A milestone target
  const percentage = (completedCtfs / targetCtfs) * 100;

  // Custom ASCII progress bar representation: 20 chars total
  const barLength = 20;
  const completedChars = Math.round((completedCtfs / targetCtfs) * barLength);
  const emptyChars = barLength - completedChars;
  const asciiBar = "█".repeat(completedChars) + "░".repeat(emptyChars);

  return (
    <div className="border border-emerald-500/20 bg-card p-6 rounded shadow-md relative group hover:border-emerald-500/40 transition-all duration-300">
      {/* Title */}
      <div className="flex items-center gap-2 mb-4">
        <Award className="w-5 h-5 text-emerald-400" />
        <h3 className="font-display text-sm tracking-wider text-emerald-400 group-hover:neon-text transition-all">
          CYLAB SECURITY ACADEMY (CMU)
        </h3>
      </div>

      {/* Progress Bar Display */}
      <div className="mb-6 font-mono text-xs md:text-sm">
        <div className="flex justify-between mb-1.5 font-bold">
          <span className="text-secondary">CTFs Solved</span>
          <span className="text-emerald-400">{completedCtfs} Challenges</span>
        </div>

        {/* ASCII Bar visualizer */}
        <div className="text-emerald-400 tracking-widest break-all select-none text-[10px] md:text-xs mb-3 font-semibold">
          {asciiBar}
        </div>

        {/* CSS progress bar */}
        <div className="w-full bg-muted h-2 border border-border overflow-hidden rounded-sm">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-emerald-500 h-full shadow-[0_0_10px_#10b981]"
          />
        </div>
      </div>

      {/* Categories list */}
      <div className="space-y-2 pt-2 border-t border-border/50">
        <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
          Challenge Domains
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
          {completedCategories.map((category) => (
            <div key={category} className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span className="truncate">{category}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CyLabProgress;
