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
              I'm Yarra Rajkumar — a B.Tech Cyber Security student at KIET with a strong focus on
              ethical hacking, digital forensics, and malware analysis. I build security tools,
              break things to understand how they work, and help secure digital systems.
            </p>
            <p className="text-card-foreground leading-relaxed text-sm">
              With hands-on experience from internships at Palo Alto Networks, Zscaler, and even the
              Cyber Crime Department of Vizag Police, I bring real-world security knowledge. I'm also
              an NCC Cadet and have delivered tech sessions on drones and cybersecurity awareness.
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
                <span>Ethical Hacking • Malware Analysis • Digital Forensics</span>
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
  "role": "Cybersecurity Student",
  "education": "B.Tech CSE (Cyber Security)",
  "interests": [
    "Ethical Hacking",
    "Digital Forensics",
    "Malware Analysis",
    "Web Security"
  ],
  "status": "Open to opportunities",
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
