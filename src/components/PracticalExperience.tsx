import { motion } from "framer-motion";
import { Terminal, Shield, Briefcase, Building, GraduationCap, ArrowRight, ArrowDown } from "lucide-react";

const milestones = [
  {
    title: "Junior Security Analyst – Luminrex",
    desc: "Active 6-month ongoing application security internship focusing on web application auditing, penetration testing, and vulnerability remediation advice.",
    icon: Briefcase,
    color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5 shadow-[0_0_15px_rgba(16,185,129,0.1)]",
  },
  {
    title: "50+ PortSwigger Labs",
    desc: "Rigorous hands-on labs covering OWASP Top 10 (SQLi, XSS, CSRF, SSRF, JWT, Access Control) in simulated target networks.",
    icon: Terminal,
    color: "text-primary border-primary/30 bg-primary/5 shadow-[0_0_15px_rgba(34,197,94,0.1)]",
  },
  {
    title: "14+ Responsible Disclosures",
    desc: "Identified, sanitized, and reported high/critical business logic, parameter tampering, and SQLi vulnerabilities in public targets.",
    icon: Shield,
    color: "text-purple-400 border-purple-500/30 bg-purple-500/5 shadow-[0_0_15px_rgba(168,85,247,0.1)]",
  },
  {
    title: "Cybersecurity Intern",
    desc: "Professional security training, threat analysis, and hands-on auditing through internships with Redynox and AICTE programs.",
    icon: Briefcase,
    color: "text-blue-400 border-blue-500/30 bg-blue-500/5 shadow-[0_0_15px_rgba(59,130,246,0.1)]",
  },
  {
    title: "Cyber Crime Department",
    desc: "2-week forensics and investigation internship with Vizag Police department assisting on live cyber infraction audits.",
    icon: Building,
    color: "text-yellow-400 border-yellow-500/30 bg-yellow-500/5 shadow-[0_0_15px_rgba(234,179,8,0.1)]",
  },
  {
    title: "B.Tech Cyber Security",
    desc: "Specialized computer science degree at KIET focusing on defensive networks, secure software engineering, and forensics.",
    icon: GraduationCap,
    color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/5 shadow-[0_0_15px_rgba(6,182,212,0.1)]",
  },
];

const PracticalExperience = () => {
  return (
    <section id="practical-experience" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-2xl md:text-3xl text-primary neon-text mb-2 tracking-wider">
            {"// PRACTICAL EXPERIENCE TIMELINE"}
          </h2>
          <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
          <p className="text-muted-foreground text-xs md:text-sm font-mono leading-relaxed">
            "A structured timeline mapping out cumulative technical exposure, lab training, disclosures, internships, and formal education."
          </p>
        </motion.div>

        {/* Timeline Flow */}
        <div className="flex flex-col gap-6 relative">
          {milestones.map((item, idx) => {
            const Icon = item.icon;
            const isLast = idx === milestones.length - 1;

            return (
              <div key={idx} className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                {/* Milestone Card */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex-1 border ${item.color} p-5 rounded font-mono w-full group hover:border-foreground/35 transition-colors duration-300 relative`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 border border-current rounded-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-foreground tracking-wider group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>

                {/* Connection Arrow */}
                {!isLast && (
                  <div className="flex justify-center items-center h-10 md:h-auto shrink-0 select-none">
                    <ArrowRight className="w-5 h-5 text-primary hidden md:block animate-pulse" />
                    <ArrowDown className="w-5 h-5 text-primary md:hidden animate-pulse" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PracticalExperience;
