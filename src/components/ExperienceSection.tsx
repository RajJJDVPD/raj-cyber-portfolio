import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Award, Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import internshipPaloalto from "@/assets/internship-paloalto.jpg";
import internshipEthicalHacking from "@/assets/internship-ethical-hacking.jpg";
import internshipNetworking from "@/assets/internship-networking.jpg";
import internshipCybercrime from "@/assets/internship-cybercrime.jpg";
import internshipRedynox from "@/assets/internship-redynox.jpg";
import certPaloalto from "@/assets/cert-paloalto.jpg";
import certSaviynt from "@/assets/cert-saviynt.jpg";
import certRedynox from "@/assets/cert-redynox.jpg";
import certPlaceholder from "@/assets/cert-placeholder.jpg";
import achievementDrone from "@/assets/achievement-drone.jpg";
import achievementNccLecture from "@/assets/achievement-ncc-lecture.jpg";
import achievementCybercrime from "@/assets/achievement-cybercrime.jpg";

const internships = [
  {
    title: "Cybersecurity Internship",
    org: "Palo Alto Networks (AICTE Cohort 9)",
    image: internshipPaloalto,
  },
  {
    title: "Ethical Hacking Internship",
    org: "AICTE (Cohort 10)",
    image: internshipEthicalHacking,
  },
  {
    title: "Networking Internship",
    org: "Zscaler (AICTE Cohort 11)",
    image: internshipNetworking,
  },
  {
    title: "Cyber Crime Dept. Internship",
    org: "Vizag Police — 2 weeks",
    image: internshipCybercrime,
  },
  {
    title: "Cybersecurity Internship",
    org: "Redynox — Jul–Aug 2025",
    image: internshipRedynox,
  },
];

const certifications = [
  { name: "Cybersecurity Essentials – Palo Alto Networks", image: certPaloalto },
  { name: "Saviynt Identity Security (ISAA) Certification", image: certSaviynt },
  { name: "Redynox Cybersecurity Internship Certificate (2025)", image: certRedynox },
  { name: "IIFIS Certification (Globally Verified) – Pursuing", image: certPlaceholder },
  { name: "NASSCOM Government Certification – Pursuing", image: certPlaceholder },
];

const achievements = [
  { text: "Delivered a technical session on Drone Technology", image: achievementDrone },
  { text: "Cybersecurity awareness lecture for NCC Cadets", image: achievementNccLecture },
  { text: "Completed internship at Cyber Crime Dept., Vizag", image: achievementCybercrime },
];

const ExperienceSection = () => {
  const [viewCert, setViewCert] = useState<{ name: string; image: string } | null>(null);

  return (
    <section id="experience" className="py-20 px-4 relative">
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
          <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
        </motion.div>

        {/* Internships */}
        <div className="mb-10">
          <h3 className="font-display text-xs text-secondary tracking-widest mb-3 flex items-center gap-2">
            <Briefcase className="w-3.5 h-3.5" /> INTERNSHIPS
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {internships.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                className="border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors group"
              >
                <div className="relative h-20 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-2">
                  <h4 className="text-[10px] text-card-foreground font-mono leading-tight">{item.title}</h4>
                  <p className="text-[9px] text-secondary">{item.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-10">
          <h3 className="font-display text-xs text-secondary tracking-widest mb-3 flex items-center gap-2">
            <Award className="w-3.5 h-3.5" /> CERTIFICATIONS
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="border border-border bg-card p-3 flex items-center justify-between gap-2 hover:border-primary/30 transition-colors"
              >
                <p className="text-[10px] font-mono text-card-foreground leading-tight flex-1">
                  <span className="text-primary mr-1">→</span> {cert.name}
                </p>
                <button
                  onClick={() => setViewCert(cert)}
                  className="shrink-0 text-[9px] font-mono border border-primary/40 text-primary px-2 py-1 hover:bg-primary hover:text-primary-foreground transition-all flex items-center gap-1"
                >
                  <Eye className="w-3 h-3" /> View
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="font-display text-xs text-secondary tracking-widest mb-3">🏆 ACHIEVEMENTS</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="border border-border bg-card overflow-hidden hover:border-primary/30 transition-colors group relative cursor-pointer"
              >
                <div className="relative h-28 overflow-hidden">
                  <img src={a.image} alt={a.text} className="w-full h-full object-cover object-top opacity-70 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-card/85">
                  <p className="text-[10px] font-mono text-primary text-center leading-relaxed">
                    <span className="text-secondary">[+]</span> {a.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Viewer Dialog */}
      <Dialog open={!!viewCert} onOpenChange={() => setViewCert(null)}>
        <DialogContent className="max-w-lg bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-sm font-mono text-primary">{viewCert?.name}</DialogTitle>
          </DialogHeader>
          <img src={viewCert?.image} alt={viewCert?.name} className="w-full rounded border border-border" />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ExperienceSection;
