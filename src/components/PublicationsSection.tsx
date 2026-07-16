import { motion } from "framer-motion";
import { BookOpen, Calendar, Clock, ExternalLink, Cpu, ShieldCheck } from "lucide-react";

interface Publication {
  id: string;
  title: string;
  excerpt: string;
  platform: string;
  url: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  icon: React.ReactNode;
}

const publicationsList: Publication[] = [
  {
    id: "PUB-001",
    title: "From SQL Injection to Remote Code Execution: A Complete Security Assessment of the NovaCRM CTF",
    excerpt: "An in-depth write-up documenting the exploitation chain from blind SQL Injection to achieving full Remote Code Execution (RCE). Walkthrough covers vulnerability mapping, credential extraction, admin panel bypass, and command injection mechanics on a simulated target.",
    platform: "Medium",
    url: "https://medium.com/@rajkumaryarra0/from-sql-injection-to-remote-code-execution-a-complete-security-assessment-of-the-novacrm-ctf-c44f74eef9ae?sharedUserId=rajkumaryarra0",
    date: "July 2026",
    readTime: "6 min read",
    category: "Offensive Security / Exploit Chains",
    tags: ["SQL Injection", "Remote Code Execution (RCE)", "CTF Walkthrough", "Web Pentesting", "Privilege Escalation"],
    icon: <Cpu className="w-8 h-8 text-primary" />
  }
];

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl md:text-3xl text-primary neon-text mb-2 tracking-wider">
            {"// PUBLICATIONS"}
          </h2>
          <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-8" />
        </motion.div>

        {/* Publications List */}
        <div className="grid gap-6">
          {publicationsList.map((pub, idx) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-purple-500/20 bg-card/40 hover:bg-card/75 hover:border-primary/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.06)] transition-all duration-300 p-6 rounded relative overflow-hidden group"
            >
              {/* Highlight Sidebar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />

              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Icon Box */}
                <div className="p-3 bg-purple-950/20 border border-purple-500/10 rounded flex-shrink-0">
                  {pub.icon}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono text-muted-foreground mb-1.5">
                      <span className="text-primary font-bold bg-primary/10 px-2 py-0.5 border border-primary/20 rounded-sm">
                        {pub.id}
                      </span>
                      <span>{pub.category}</span>
                      <span className="text-purple-400">•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {pub.date}
                      </span>
                      <span className="text-purple-400">•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {pub.readTime}
                      </span>
                    </div>

                    <h3 className="text-base md:text-lg font-bold font-mono text-foreground group-hover:text-primary transition-colors leading-snug">
                      {pub.title}
                    </h3>
                  </div>

                  <p className="text-xs text-muted-foreground font-mono leading-relaxed">
                    {pub.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[8px] font-mono px-1.5 py-0.5 bg-purple-950/20 text-purple-300 border border-purple-950/50 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 pt-3 border-t border-purple-950/20 items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                      <span>Published on:</span>
                      <span className="text-white font-bold bg-zinc-900 border border-zinc-700 px-2 py-0.5 rounded flex items-center gap-1">
                        <BookOpen className="w-3 h-3 text-emerald-400" /> {pub.platform}
                      </span>
                    </div>

                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono bg-primary text-black font-bold px-3 py-1.5 hover:bg-white hover:text-black hover:shadow-[0_0_10px_rgba(34,211,238,0.2)] transition-all duration-300 rounded border border-primary/20"
                    >
                      Read on Medium <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Methodology statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 p-4 border border-dashed border-primary/20 bg-primary/5 rounded flex gap-3 items-start"
        >
          <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <h4 className="text-xs font-bold font-mono text-primary">OFFENSIVE SECURITY METHODOLOGY STATEMENT</h4>
            <p className="text-[10px] font-mono text-muted-foreground leading-relaxed">
              All write-ups published here involve simulated targets (CTFs) or responsibly disclosed vulnerabilities. Ethical boundaries and legal guidelines are strictly followed. No systems were harmed or left exposed.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PublicationsSection;
