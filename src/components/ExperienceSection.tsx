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
import certGoogleFoundations from "@/assets/cert-google-foundations.jpg";
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
  { name: "Foundations of Cybersecurity – Google", image: certGoogleFoundations },
  { name: "Cybersecurity Essentials – Palo Alto Networks", image: certPaloalto },
  { name: "Saviynt Identity Security (ISAA) Certification", image: certSaviynt },
  { name: "Redynox Cybersecurity Internship Certificate (2025)", image: certRedynox },
  { name: "IIFIS Certification (Globally Verified) – Pursuing", image: certPlaceholder },
  { name: "NASSCOM Government Certification – Pursuing", image: certPlaceholder },
];

const achievements = [
  {
    text: "Delivered a technical session on Drone Technology",
    image: achievementDrone,
    detail: "Presented an in-depth technical session on modern drone technology, covering UAV architecture, flight control systems, and real-world applications in surveillance and disaster management. The session was attended by students and faculty, sparking discussions on the intersection of drones with cybersecurity and ethical considerations in autonomous systems.",
  },
  {
    text: "Cybersecurity awareness lecture for NCC Cadets",
    image: achievementNccLecture,
    objectPos: "center 30%",
    detail: "Conducted an interactive cybersecurity awareness session for NCC cadets, educating them on common cyber threats including phishing, social engineering, and password security. Demonstrated live examples of how attackers exploit vulnerabilities, and trained cadets on best practices for maintaining digital hygiene. The lecture emphasized the critical role of cybersecurity in national defense.",
  },
  {
    text: "Completed internship at Cyber Crime Dept., Vizag",
    image: achievementCybercrime,
    detail: "Successfully completed a two-week internship at the Cyber Crime Department, Visakhapatnam Police. Gained hands-on exposure to real-world cyber crime investigation procedures, digital evidence collection, and forensic analysis techniques. Worked alongside experienced officers to understand case filing, FIR processes for cyber offenses, and the legal framework governing cyber crimes in India.",
  },
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="border border-border bg-card/60 backdrop-blur-md overflow-hidden hover:border-primary/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.1)] transition-all duration-300 rounded flex flex-col group cursor-pointer"
                onClick={() => setViewCert(cert)}
              >
                {/* Certificate Preview Image */}
                <div className="relative h-32 w-full overflow-hidden bg-black/40 border-b border-border/50 shrink-0">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-102 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <span className="text-[10px] font-mono border border-primary text-primary px-3 py-1 bg-background/90 rounded shadow-md flex items-center gap-1.5">
                      <Eye className="w-3 h-3" /> View Large
                    </span>
                  </div>
                </div>

                {/* Certificate Title */}
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <p className="text-[11px] font-mono text-card-foreground leading-snug group-hover:text-primary transition-colors flex items-start gap-1">
                    <span className="text-primary mt-0.5 select-none">→</span>
                    <span className="flex-1">{cert.name}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="font-display text-xs text-secondary tracking-widest mb-3 flex items-center gap-2">
            🏆 ACHIEVEMENTS
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="border border-border bg-card/60 backdrop-blur-md overflow-hidden hover:border-primary/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.1)] transition-all duration-300 rounded flex flex-col group"
              >
                <div className="relative h-36 overflow-hidden shrink-0 bg-black/20">
                  <img
                    src={a.image}
                    alt={a.text}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-102 transition-all duration-500"
                    style={{ objectPosition: a.objectPos || "top" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold font-mono text-primary mb-2 tracking-wide group-hover:neon-text transition-all leading-snug">
                      [+] {a.text}
                    </h4>
                    <p className="text-[10px] md:text-[11px] font-mono text-muted-foreground leading-relaxed">
                      {a.detail}
                    </p>
                  </div>
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
