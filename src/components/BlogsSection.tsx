import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Calendar, ArrowUpRight, Lock } from "lucide-react";

const blogs = [
  {
    slug: "understanding-sql-injection",
    title: "Understanding SQL Injection",
    description: "Deep dive into Boolean, Error-based, and UNION-based SQL injections. Mitigations using PDO statements.",
    date: "July 2026",
    status: "Published",
    tags: ["SQL Injection", "VAPT", "AppSec"],
    isDraft: false,
  },
  {
    slug: "how-i-solved-portswigger-labs",
    title: "How I Solved 50+ PortSwigger Labs",
    description: "A comprehensive log of methodologies, lab breakdowns, and learning strategies to conquer PortSwigger Web Security Academy.",
    date: "July 2026",
    status: "Published",
    tags: ["PortSwigger", "Education", "Offensive Sec"],
    isDraft: false,
  },
  {
    slug: "authentication-testing-methodologies",
    title: "Authentication Testing Methodologies",
    description: "Exploiting multi-factor bypasses, session fixation, and business logic flaws in authentication endpoints.",
    date: "August 2026",
    status: "Coming Soon",
    tags: ["Auth", "Pentesting", "OWASP Top 10"],
    isDraft: true,
  },
  {
    slug: "jwt-security-bypasses",
    title: "JWT Security: Bypasses and Best Practices",
    description: "Analyzing JSON Web Tokens for weak signatures, algorithm manipulation (none-alg), and session security.",
    date: "September 2026",
    status: "Coming Soon",
    tags: ["JWT", "Web Token", "Cryptanalysis"],
    isDraft: true,
  },
];

const BlogsSection = () => {
  return (
    <section id="blogs" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="font-display text-2xl md:text-3xl text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] mb-2 tracking-wider">
            {"// LATEST TECHNICAL RESEARCH & BLOGS"}
          </h2>
          <div className="h-px bg-gradient-to-r from-purple-500/50 to-transparent mb-6" />
          <p className="text-muted-foreground text-xs md:text-sm font-mono leading-relaxed">
            "Articles and technical write-ups covering web application exploits, PortSwigger walkthroughs, and VAPT methodologies."
          </p>
        </motion.div>

        {/* Blogs Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {blogs.map((blog, idx) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`border ${
                blog.isDraft
                  ? "border-border/30 bg-card/40 opacity-70"
                  : "border-purple-500/20 bg-card/60 hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.08)]"
              } p-5 rounded flex flex-col justify-between transition-all duration-300 group`}
            >
              <div>
                {/* Meta details */}
                <div className="flex justify-between items-center mb-3 font-mono text-[9px] uppercase tracking-wider">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {blog.date}
                  </span>
                  {blog.isDraft ? (
                    <span className="text-yellow-500 border border-yellow-500/30 px-1.5 py-0.5 bg-yellow-500/5 rounded flex items-center gap-1 font-bold">
                      <Lock className="w-2.5 h-2.5" /> Coming Soon
                    </span>
                  ) : (
                    <span className="text-purple-400 border border-purple-500/30 px-1.5 py-0.5 bg-purple-500/5 rounded font-bold">
                      {blog.status}
                    </span>
                  )}
                </div>

                <h3 className="font-mono text-sm font-bold text-foreground group-hover:text-purple-300 transition-colors mb-2 leading-snug">
                  {blog.title}
                </h3>
                <p className="text-[11px] font-mono text-muted-foreground leading-relaxed mb-4">
                  {blog.description}
                </p>
              </div>

              {/* Footer details */}
              <div className="pt-3 border-t border-border/10 flex justify-between items-center mt-auto">
                <div className="flex flex-wrap gap-1">
                  {blog.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[8px] font-mono px-1.5 py-0.5 bg-purple-950/20 text-purple-400 border border-purple-950/40 rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {!blog.isDraft && (
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="text-[10px] font-mono text-purple-400 hover:text-purple-300 flex items-center gap-0.5 hover:underline"
                  >
                    Read <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
