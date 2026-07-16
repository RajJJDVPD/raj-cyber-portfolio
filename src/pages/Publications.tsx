import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Calendar, Clock, ExternalLink, Database, Cpu, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import MatrixRain from "@/components/MatrixRain";

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

const Publications = () => {
  return (
    <div className="relative min-h-screen bg-background scanline">
      {/* Background Matrix rain effect */}
      <MatrixRain />
      
      <Navbar />

      <div className="relative z-10 max-w-5xl mx-auto px-4 pt-32 pb-24">
        {/* Navigation & Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-primary hover:text-white border border-primary/30 hover:border-primary px-3 py-1.5 transition-all duration-300 rounded bg-black/40"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> [ Back to Portfolio ]
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 mb-12"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-primary tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            RESEARCH & WRITE-UPS
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground neon-text-strong">
            PUBLICATIONS
          </h1>
          <p className="text-sm font-mono text-muted-foreground max-w-2xl leading-relaxed">
            {"// Technical write-ups, CTF solutions, walkthroughs, and security research detailing complex exploit development and analysis."}
          </p>
        </motion.div>

        {/* Publication Cards Grid */}
        <div className="grid gap-6">
          {publicationsList.map((pub, idx) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-purple-500/25 bg-card/60 hover:bg-card/85 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.08)] transition-all duration-300 p-6 rounded-lg flex flex-col md:flex-row gap-6 items-start relative overflow-hidden group"
            >
              {/* Highlight Sidebar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />

              {/* Icon & Category Indicator */}
              <div className="p-4 bg-purple-950/20 border border-purple-500/15 rounded-md flex-shrink-0">
                {pub.icon}
              </div>

              {/* Content Block */}
              <div className="flex-1 space-y-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono text-muted-foreground mb-2">
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

                  <h2 className="text-lg md:text-xl font-bold font-mono text-foreground group-hover:text-primary transition-colors leading-snug">
                    {pub.title}
                  </h2>
                </div>

                <p className="text-xs md:text-sm text-muted-foreground font-mono leading-relaxed">
                  {pub.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-mono px-2 py-0.5 bg-purple-950/30 text-purple-300 border border-purple-950/60 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-purple-950/20 items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                    <span>Published on:</span>
                    <span className="text-white font-bold bg-zinc-900 border border-zinc-700 px-2 py-0.5 rounded flex items-center gap-1.5">
                      <BookOpen className="w-3 h-3 text-emerald-400" /> {pub.platform}
                    </span>
                  </div>

                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono bg-primary text-black font-bold px-4 py-2 hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300 rounded shadow-md border border-primary/20"
                  >
                    Read on Medium <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Informational Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-4 border border-dashed border-primary/25 bg-primary/5 rounded flex gap-3 items-start"
        >
          <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="text-xs font-bold font-mono text-primary">OFFENSIVE SECURITY METHODOLOGY STATEMENT</h4>
            <p className="text-[10px] font-mono text-muted-foreground leading-relaxed">
              All write-ups published here involve simulated targets (CTFs) or responsibly disclosed vulnerabilities. Ethical boundaries and legal guidelines are strictly followed. No systems were harmed or left exposed.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Publications;
