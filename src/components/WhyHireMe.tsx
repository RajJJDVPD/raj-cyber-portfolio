import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";

const reasons = [
  "50+ hands-on PortSwigger Academy labs completed (SQLi, XSS, JWT, SSRF)",
  "14+ responsibly disclosed vulnerabilities in real-world web applications",
  "Junior Security Analyst internship experience with professional audits",
  "Vizag Cyber Crime Department internship analyzing live digital investigations",
  "Custom security tools and scan automation engines built from scratch with Python",
  "Strong documentation, report writing, and client communication skills",
];

const WhyHireMe = () => {
  return (
    <section id="why-hire-me" className="py-20 px-4 relative border-t border-border/30 bg-card/20">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          {/* Header Block (1 col) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-2 text-primary">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-widest font-bold">Why Hire Me?</span>
            </div>
            <h2 className="font-display text-2xl font-bold tracking-wider text-foreground mb-4 leading-tight">
              EVIDENCE-BASED SECURITY SKILLS
            </h2>
            <p className="text-[11px] font-mono text-muted-foreground leading-relaxed">
              "No generic lists or empty buzzwords. Every capability is backed by public disclosures, labs, custom tools, or official internships."
            </p>
          </motion.div>

          {/* Reasons List (2 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 border border-primary/20 bg-card/50 p-6 rounded font-mono text-xs md:text-sm space-y-4 hover:border-primary/40 transition-colors"
          >
            {reasons.map((reason, idx) => (
              <div key={idx} className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors group">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="leading-relaxed">{reason}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
