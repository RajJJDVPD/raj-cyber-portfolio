import { motion } from "framer-motion";
import { MapPin, GraduationCap, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl md:text-3xl text-primary neon-text mb-2 tracking-wider">
            {"// ABOUT_ME"}
          </h2>
          <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-card-foreground leading-relaxed text-sm">
              I focus on Web Application Security and Vulnerability Assessment. My experience includes completing 50+ PortSwigger labs, reporting 14+ vulnerabilities through responsible disclosure, developing security tools, and gaining hands-on experience through internships.
            </p>

            <div className="space-y-3 text-sm pt-2">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>Kakinada, Andhra Pradesh, India</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <GraduationCap className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>B.Tech in Cyber Security — KIET (CGPA: 7.2)</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Target className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>Web Pentesting • SQL Injection & XSS • Business Logic Audits</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border border-border bg-card p-4 font-mono text-xs neon-border"
          >
            <div className="text-muted-foreground mb-2">$ cat profile.json</div>
            <pre className="text-card-foreground whitespace-pre-wrap">
{`{
  "name": "Yarra Rajkumar",
  "role": "Junior Application Security Engineer",
  "education": "B.Tech CSE (Cyber Security)",
  "vulnerabilities_reported": 14,
  "specialties": [
    "Web Application Pentesting",
    "Vulnerability Assessment & VAPT",
    "OWASP Top 10 Auditing",
    "Security Automation (Python)"
  ],
  "certifications": [
    "Google Foundations of Cybersecurity",
    "Palo Alto Networks Cybersecurity Essentials",
    "Saviynt Identity Security (ISAA)"
  ],
  "status": "Open to security opportunities",
  "ncc_cadet": true
}`}
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
