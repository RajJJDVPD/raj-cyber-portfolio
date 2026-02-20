import { useState, useEffect } from "react";
import { Shield, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Activities", href: "#activities" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-primary font-display text-sm tracking-widest neon-text">
          <Shield className="w-5 h-5" />
          RK_SEC
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted-foreground text-xs font-mono hover:text-primary transition-colors uppercase tracking-wider"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/rajkumar_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono border border-primary text-primary px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground text-sm font-mono hover:text-primary transition-colors"
                >
                  {">"} {l.label}
                </a>
              ))}
              <a
                href="/rajkumar_resume.pdf"
                target="_blank"
                className="text-sm font-mono border border-primary text-primary px-3 py-2 text-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
