import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";
import internshipPlaceholder from "@/assets/internship-placeholder.jpg";
import internshipCybercrime from "@/assets/internship-cybercrime.jpg";
import certPlaceholder from "@/assets/cert-placeholder.jpg";
import achievementPlaceholder from "@/assets/achievement-placeholder.jpg";

const internships = [
  {
    title: "Cybersecurity Internship",
    org: "Palo Alto Networks (AICTE Cohort 9)",
    detail: "Virtual internship focusing on cybersecurity fundamentals",
    image: internshipPlaceholder,
  },
  {
    title: "Ethical Hacking Internship",
    org: "AICTE (Cohort 10)",
    detail: "Ethical hacking methodologies and penetration testing",
    image: internshipPlaceholder,
  },
  {
    title: "Networking Internship",
    org: "Zscaler (AICTE Cohort 11)",
    detail: "Network security architecture and zero-trust principles",
    image: internshipPlaceholder,
  },
  {
    title: "Cyber Crime Department Internship",
    org: "Vizag Police — 2 weeks",
    detail: "Investigation techniques and digital evidence handling",
    image: internshipCybercrime,
  },
  {
    title: "Cybersecurity Internship",
    org: "Redynox — Jul–Aug 2025",
    detail: "Cybercrime prevention and infrastructure security",
    image: internshipPlaceholder,
  },
];

const certifications = [
  "Cybersecurity Essentials – Palo Alto Networks",
  "Saviynt Identity Security (ISAA) Certification",
  "Redynox Cybersecurity Internship Certificate (2025)",
  "IIFIS Certification (Globally Verified) – Pursuing",
  "NASSCOM Government Certification – Pursuing",
];

const achievements = [
  "Delivered a technical session on Drone Technology and applications",
  "Invited to deliver cybersecurity awareness lecture for NCC Cadets",
  "Completed internship at Cyber Crime Department, Vizag",
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl md:text-3xl text-primary neon-text mb-2 tracking-wider">
            {"// EXPERIENCE"}
          </h2>
          <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-8" />
        </motion.div>

        {/* Internships */}
        <div className="mb-12">
          <h3 className="font-display text-xs text-secondary tracking-widest mb-4 flex items-center gap-2">
            <Briefcase className="w-4 h-4" /> INTERNSHIPS
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {internships.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors group"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-3">
                  <h4 className="text-sm text-card-foreground font-mono">{item.title}</h4>
                  <p className="text-xs text-secondary">{item.org}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h3 className="font-display text-xs text-secondary tracking-widest mb-4 flex items-center gap-2">
            <Award className="w-4 h-4" /> CERTIFICATIONS
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="border border-border bg-card overflow-hidden hover:border-primary/30 transition-colors group"
              >
                <div className="relative h-28 overflow-hidden">
                  <img
                    src={certPlaceholder}
                    alt={cert}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                </div>
                <div className="px-3 py-2">
                  <p className="text-xs font-mono text-card-foreground">
                    <span className="text-primary mr-1">→</span> {cert}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="font-display text-xs text-secondary tracking-widest mb-4">🏆 ACHIEVEMENTS</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="border border-border bg-card overflow-hidden hover:border-primary/30 transition-colors group"
              >
                <div className="relative h-28 overflow-hidden">
                  <img
                    src={achievementPlaceholder}
                    alt={a}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                </div>
                <div className="px-3 py-2">
                  <p className="text-xs font-mono text-muted-foreground">
                    <span className="text-primary">[+]</span> {a}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
