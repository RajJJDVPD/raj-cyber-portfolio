import { motion } from "framer-motion";
import { MapPin, GraduationCap, Target } from "lucide-react";
import profilePic from "@/assets/profile.jpg";

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
            <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
              <div className="w-28 h-28 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded border border-primary/30 p-1 bg-card/60 backdrop-blur-md overflow-hidden shrink-0 group hover:border-primary transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.12)] hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                <img 
                  src={profilePic} 
                  alt="Yarra Rajkumar" 
                  className="w-full h-full object-cover rounded opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-card-foreground leading-relaxed text-sm">
                  I'm Yarra Rajkumar — a B.Tech Cyber Security student at KIET and an active **Security Researcher** specializing in web application penetration testing, vulnerability discovery, and ethical hacking. I actively analyze web systems, discover critical security flaws, and coordinate responsible disclosures to help secure digital environments.
                </p>
              </div>
            </div>
            <p className="text-card-foreground leading-relaxed text-sm">
              I have discovered and responsibly reported **14 security vulnerabilities**, including critical UNION-based SQL injections exposing administrator credentials, and high-impact business logic flaws like price manipulation and checkout bypasses. My hands-on background includes security internships with Palo Alto Networks, Redynox, Zscaler, and the **Cyber Crime Department of the Vizag Police**.
            </p>

            <div className="space-y-3 text-sm">
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
  "role": "Security Researcher & Cybersecurity Student",
  "education": "B.Tech CSE (Cyber Security)",
  "vulnerabilities_reported": 14,
  "specialties": [
    "Web Application Pentesting",
    "Business Logic Auditing",
    "SQL Injection & XSS",
    "Digital Forensics"
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
