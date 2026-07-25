import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Calendar, Tag } from "lucide-react";
import { blogs } from "@/data/blogs";
import Navbar from "@/components/Navbar";
import MatrixRain from "@/components/MatrixRain";

// A simple parser to render basic markdown elements in React
const renderMarkdown = (text: string) => {
  return text.split("\n\n").map((paragraph, index) => {
    const trimmed = paragraph.trim();
    if (!trimmed) return null;

    // Headings
    if (trimmed.startsWith("### ")) {
      return (
        <h4 key={index} className="text-sm font-bold text-primary tracking-wider uppercase mt-4 mb-2 font-mono">
          [+] {trimmed.replace("### ", "")}
        </h4>
      );
    }
    if (trimmed.startsWith("## ")) {
      return (
        <h3 key={index} className="text-base font-bold text-purple-300 tracking-wider uppercase mt-6 mb-3 font-display">
          {trimmed.replace("## ", "")}
        </h3>
      );
    }
    if (trimmed.startsWith("# ")) {
      return (
        <h2 key={index} className="text-xl font-bold text-primary tracking-wider uppercase mt-8 mb-4 font-display neon-text">
          {trimmed.replace("# ", "")}
        </h2>
      );
    }

    // Code Blocks
    if (trimmed.startsWith("```")) {
      const lines = trimmed.split("\n");
      const codeLines = lines.slice(1, lines.length - 1).join("\n");
      const lang = lines[0].replace("```", "").trim();
      return (
        <pre key={index} className="border border-border/40 bg-black/40 p-4 font-mono text-[11px] leading-relaxed text-foreground rounded my-4 overflow-x-auto shadow-inner">
          <div className="text-[8px] text-muted-foreground uppercase border-b border-border/20 pb-1 mb-2 select-none">
            {lang || "code"}
          </div>
          <code>{codeLines}</code>
        </pre>
      );
    }

    // Bullet Lists
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      return (
        <ul key={index} className="list-disc pl-5 my-3 space-y-1.5 font-mono text-xs text-muted-foreground">
          {trimmed.split("\n").map((line, lIdx) => (
            <li key={lIdx} className="leading-relaxed">
              {line.replace(/^[-*]\s+/, "")}
            </li>
          ))}
        </ul>
      );
    }

    // Numbered Lists
    if (/^\d+\.\s+/.test(trimmed)) {
      return (
        <ol key={index} className="list-decimal pl-5 my-3 space-y-1.5 font-mono text-xs text-muted-foreground">
          {trimmed.split("\n").map((line, lIdx) => (
            <li key={lIdx} className="leading-relaxed">
              {line.replace(/^\d+\.\s+/, "")}
            </li>
          ))}
        </ol>
      );
    }

    // Horizontal Rule
    if (trimmed === "---") {
      return <hr key={index} className="border-border/30 my-6" />;
    }

    // Standard Paragraph
    return (
      <p key={index} className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3 font-mono">
        {trimmed.split(" ").map((word, wIdx) => {
          // Highlight code snippets (like `code`)
          if (word.startsWith("`") && word.endsWith("`")) {
            return (
              <code key={wIdx} className="text-primary bg-primary/5 border border-primary/20 px-1 py-0.5 rounded font-mono text-[10px] mx-0.5">
                {word.replace(/`/g, "")}
              </code>
            );
          }
          return word + " ";
        })}
      </p>
    );
  });
};

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="relative min-h-screen bg-background scanline">
        <MatrixRain />
        <Navbar />
        <div className="relative z-10 pt-32 px-4 max-w-xl mx-auto text-center">
          <BookOpen className="w-16 h-16 text-purple-500 mx-auto mb-4 animate-pulse" />
          <h2 className="font-display text-xl text-purple-400 mb-2">{"// ERROR: ARTICLE NOT FOUND"}</h2>
          <p className="text-xs font-mono text-muted-foreground mb-6">
            The requested technical article does not exist or remains locked.
          </p>
          <Link
            to="/#blogs"
            className="inline-flex items-center gap-2 text-xs font-mono border border-primary text-primary px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Research
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-background scanline">
      <MatrixRain />
      <Navbar />

      <main className="relative z-10 pt-28 px-4 pb-24 max-w-3xl mx-auto">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/#blogs"
            className="inline-flex items-center gap-2 text-[10px] font-mono border border-purple-500/40 text-purple-400 hover:text-white hover:bg-purple-600 px-3 py-1.5 transition-all duration-300 rounded"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> [ Return to Blogs ]
          </Link>
        </div>

        {/* Article Meta */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-purple-500/30 bg-card/60 backdrop-blur-md p-6 rounded mb-8 font-mono"
        >
          <div className="flex items-center gap-3 text-[10px] text-muted-foreground mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-purple-400" /> {blog.date}
            </span>
            <span>•</span>
            <span className="text-purple-400 font-bold uppercase">Article Entry</span>
          </div>

          <h1 className="font-display text-2xl font-bold tracking-wider text-foreground mb-4 leading-snug">
            {blog.title}
          </h1>

          <div className="flex flex-wrap gap-1">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-mono px-2 py-0.5 bg-purple-950/30 text-purple-400 border border-purple-500/20 rounded-sm flex items-center gap-1"
              >
                <Tag className="w-2.5 h-2.5" /> {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Article Body */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-card/30 backdrop-blur-sm border border-border/30 p-6 rounded"
        >
          {renderMarkdown(blog.content)}
        </motion.article>

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-purple-950/40 flex justify-center">
          <Link
            to="/#blogs"
            className="inline-flex items-center gap-2 text-[10px] font-mono border border-purple-500/40 text-purple-400 hover:text-white hover:bg-purple-600 px-4 py-2 transition-all duration-300 rounded"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> [ Back to Blogs ]
          </Link>
        </div>
      </main>
    </div>
  );
};

export default BlogDetail;
