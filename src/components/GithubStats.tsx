import { motion } from "framer-motion";
import { Github, GitPullRequest, Code, Calendar } from "lucide-react";

// Mocking a green contribution graph grid (24 columns x 7 rows for standard preview)
const contributionActivity = [
  [3, 0, 1, 2, 0, 4, 1],
  [0, 2, 3, 0, 1, 0, 2],
  [1, 0, 0, 4, 2, 1, 3],
  [2, 3, 1, 0, 0, 2, 0],
  [0, 1, 4, 3, 1, 0, 1],
  [4, 0, 2, 1, 0, 3, 2],
  [1, 2, 0, 0, 4, 1, 0],
  [3, 1, 2, 4, 0, 2, 1],
  [0, 4, 1, 0, 3, 0, 3],
  [2, 0, 3, 2, 1, 4, 0],
  [1, 3, 0, 1, 0, 2, 2],
  [4, 1, 2, 0, 3, 1, 0],
  [0, 2, 4, 3, 1, 0, 4],
  [3, 0, 1, 2, 0, 2, 1],
  [1, 4, 0, 0, 3, 1, 3],
  [2, 1, 3, 4, 1, 0, 0],
  [0, 3, 2, 1, 0, 4, 2],
  [4, 0, 1, 0, 2, 3, 1],
  [1, 2, 4, 3, 1, 0, 0],
  [3, 1, 0, 2, 0, 4, 3],
  [0, 4, 2, 1, 3, 1, 2],
  [2, 0, 3, 0, 1, 2, 0],
  [1, 3, 1, 4, 2, 0, 4],
  [4, 2, 0, 1, 3, 3, 2],
];

const getGridColor = (level: number) => {
  switch (level) {
    case 1:
      return "bg-emerald-900/40 border-emerald-800/30";
    case 2:
      return "bg-emerald-700/60 border-emerald-600/40";
    case 3:
      return "bg-emerald-500/80 border-emerald-400/50 shadow-[0_0_8px_rgba(16,185,129,0.25)]";
    case 4:
      return "bg-primary border-primary shadow-[0_0_12px_rgba(34,197,94,0.4)]";
    default:
      return "bg-card border-border/30";
  }
};

const GithubStats = () => {
  return (
    <section id="github-activity" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="font-display text-2xl md:text-3xl text-primary neon-text mb-2 tracking-wider">
            {"// GITHUB_CONTRIBUTIONS"}
          </h2>
          <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
          <p className="text-muted-foreground text-xs md:text-sm font-mono leading-relaxed">
            "Live monitoring of active code developments, tool commits, and syntax builds on GitHub."
          </p>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid md:grid-cols-3 gap-6 font-mono text-xs">
          {/* Contribution Graph (2 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 border border-primary/20 bg-card/60 p-5 rounded flex flex-col justify-between hover:border-primary/40 transition-colors"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="flex items-center gap-1.5 font-bold text-foreground">
                  <Github className="w-4 h-4 text-primary" />
                  RajJJDVPD / Contribution History
                </span>
                <span className="text-[10px] text-muted-foreground uppercase">Active Build Node</span>
              </div>

              {/* Contribution Grid */}
              <div className="overflow-x-auto pb-2 scrollbar-thin">
                <div className="flex gap-1 min-w-[360px] justify-between">
                  {contributionActivity.map((col, colIdx) => (
                    <div key={colIdx} className="flex flex-col gap-1">
                      {col.map((level, rowIdx) => (
                        <div
                          key={rowIdx}
                          className={`w-3.5 h-3.5 border rounded-sm transition-all duration-300 hover:scale-110 cursor-help ${getGridColor(
                            level
                          )}`}
                          title={`${level > 0 ? `${level * 3} contributions` : "No contributions"}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Grid Legend */}
            <div className="flex justify-between items-center mt-4 pt-3 border-t border-border/30 text-[9px] text-muted-foreground uppercase">
              <span>Less</span>
              <div className="flex gap-1.5 items-center">
                <div className="w-2.5 h-2.5 bg-card border border-border/30 rounded-sm" />
                <div className="w-2.5 h-2.5 bg-emerald-900/40 border border-emerald-800/30 rounded-sm" />
                <div className="w-2.5 h-2.5 bg-emerald-700/60 border border-emerald-600/40 rounded-sm" />
                <div className="w-2.5 h-2.5 bg-emerald-500/80 border border-emerald-400/50 rounded-sm" />
                <div className="w-2.5 h-2.5 bg-primary border border-primary rounded-sm" />
              </div>
              <span>More</span>
            </div>
          </motion.div>

          {/* Repo & Commit Stats (1 col) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-primary/20 bg-card/60 p-5 rounded flex flex-col justify-between hover:border-primary/40 transition-colors"
          >
            <div className="space-y-4">
              <div className="text-[10px] uppercase text-muted-foreground tracking-widest border-b border-border/30 pb-2">
                Repository Monitor
              </div>

              {/* Latest Repository */}
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-foreground font-bold">
                  <GitPullRequest className="w-3.5 h-3.5 text-primary" />
                  Latest Repository:
                </div>
                <div className="pl-5">
                  <a
                    href="https://github.com/RajJJDVPD/CYBER-X"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    CYBER-X
                  </a>
                  <p className="text-[10px] text-muted-foreground mt-0.5 leading-snug">
                    Flask web-based malware scanning engine utilizing custom YARA rule sets.
                  </p>
                </div>
              </div>

              {/* Latest Commit */}
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-foreground font-bold">
                  <Calendar className="w-3.5 h-3.5 text-primary" />
                  Latest Commit:
                </div>
                <div className="pl-5 text-[10px] text-muted-foreground leading-snug">
                  <span className="text-secondary block font-semibold">"feat: integrate YARA engine & log sanitization"</span>
                  <span>committed 2 days ago</span>
                </div>
              </div>

              {/* Top Languages */}
              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-foreground font-bold">
                  <Code className="w-3.5 h-3.5 text-primary" />
                  Language Distribution:
                </div>
                <div className="pl-5 space-y-1 text-[10px]">
                  {[
                    { lang: "Python", share: "55%", color: "bg-primary" },
                    { lang: "Flask / Javascript", share: "25%", color: "bg-blue-500" },
                    { lang: "HTML & CSS", share: "20%", color: "bg-purple-500" },
                  ].map((item) => (
                    <div key={item.lang} className="space-y-0.5">
                      <div className="flex justify-between text-muted-foreground">
                        <span>{item.lang}</span>
                        <span className="text-foreground">{item.share}</span>
                      </div>
                      <div className="w-full bg-muted h-1 rounded-sm overflow-hidden">
                        <div className={`h-full ${item.color}`} style={{ width: item.share }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-border/30">
              <a
                href="https://github.com/RajJJDVPD"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 text-[10px] border border-primary text-primary hover:bg-primary hover:text-primary-foreground py-1.5 transition-all rounded"
              >
                <Github className="w-3.5 h-3.5" /> Visit GitHub Profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
