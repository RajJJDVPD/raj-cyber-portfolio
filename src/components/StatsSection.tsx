import { motion } from "framer-motion";
import { Terminal, Shield, Code, Briefcase, Award, GraduationCap } from "lucide-react";

const stats = [
  {
    value: "50+",
    label: "PortSwigger Labs",
    icon: Terminal,
    description: "Hands-on web vulnerability labs completed",
    color: "text-primary border-primary/25 bg-primary/5",
  },
  {
    value: "14+",
    label: "Responsible Disclosures",
    icon: Shield,
    description: "Vulnerabilities reported to vendors",
    color: "text-purple-400 border-purple-500/25 bg-purple-500/5",
  },
  {
    value: "3",
    label: "Security Projects",
    icon: Code,
    description: "Open-source security tools & scanners",
    color: "text-blue-400 border-blue-500/25 bg-blue-500/5",
  },
  {
    value: "2",
    label: "Internships",
    icon: Briefcase,
    description: "Industry & law enforcement experience",
    color: "text-yellow-400 border-yellow-500/25 bg-yellow-500/5",
  },
  {
    value: "7+",
    label: "Certifications",
    icon: Award,
    description: "Industry certified credentials",
    color: "text-cyan-400 border-cyan-500/25 bg-cyan-500/5",
  },
  {
    value: "2026",
    label: "Cybersecurity Graduate",
    icon: GraduationCap,
    description: "Specialized B.Tech program completion",
    color: "text-rose-400 border-rose-500/25 bg-rose-500/5",
  },
];

const StatsSection = () => {
  return (
    <section className="py-12 px-4 border-y border-border/30 bg-background/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.02),transparent)] pointer-events-none" />
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`border ${stat.color} p-4 rounded backdrop-blur-sm flex flex-col justify-between hover:shadow-[0_0_15px_rgba(34,197,94,0.05)] transition-all duration-300 group`}
              >
                <div className="flex justify-between items-start mb-2">
                  <Icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                </div>
                <div className="space-y-1">
                  <div className="text-2xl md:text-3xl font-display font-bold tracking-tight leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-[11px] font-mono font-bold text-foreground leading-snug">
                    {stat.label}
                  </div>
                  <div className="text-[9px] text-muted-foreground font-mono leading-tight">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
