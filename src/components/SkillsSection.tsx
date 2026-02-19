import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "SECURITY_TOOLS",
    icon: "🛡️",
    skills: ["Nmap", "Wireshark", "Hashcat", "YARA", "Burp Suite"],
  },
  {
    title: "PROGRAMMING",
    icon: "💻",
    skills: ["Python", "C", "HTML", "CSS", "Flask"],
  },
  {
    title: "CYBER_DOMAINS",
    icon: "🔐",
    skills: ["Ethical Hacking", "Malware Analysis", "Digital Forensics", "Web Security"],
  },
  {
    title: "PLATFORMS",
    icon: "⚙️",
    skills: ["Kali Linux", "Windows", "VMware", "VS Code"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl md:text-3xl text-primary neon-text mb-2 tracking-wider">
            {"// SKILL_SET"}
          </h2>
          <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-8" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border bg-card p-5 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">{cat.icon}</span>
                <h3 className="font-display text-xs text-primary tracking-wider group-hover:neon-text transition-all">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-2 py-1 border border-border text-muted-foreground bg-muted hover:border-primary/50 hover:text-primary transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
