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
import internshipLuminrex from "@/assets/internship-luminrex.png";
import internshipCybercrimeFeatured from "@/assets/internship-cybercrime-featured.png";
import certPaloalto from "@/assets/cert-paloalto.jpg";
import certSaviynt from "@/assets/cert-saviynt.jpg";
import certRedynox from "@/assets/cert-redynox.png";
import certGoogleFoundations from "@/assets/cert-google-foundations.jpg";
import nasscomCert from "@/assets/cert-nasscom-2026.png";
import achievementDrone from "@/assets/achievement-drone.jpg";
import achievementNccLecture from "@/assets/achievement-ncc-lecture.jpg";
import achievementCybercrime from "@/assets/achievement-cybercrime.jpg";
import achievementPlaceholder from "@/assets/achievement-placeholder.jpg";

const internships = [
  {
    title: "Junior Security Analyst",
    org: "Luminrex",
    image: internshipLuminrex,
    duration: "6 Months",
    date: "April 2026 – September 2026",
    status: "Present / Ongoing",
    featured: true,
    desc: "Active participation in application vulnerability assessment, penetration testing, securing cloud interfaces, and implementing custom scanning scripts.",
  },
  {
    title: "Cyber Crime Dept. Internship",
    org: "Vizag Police — 2 weeks",
    image: internshipCybercrimeFeatured,
    duration: "2 Weeks",
    date: "April 2025",
    status: "High Impact",
    featured: true,
    desc: "Assisted forensics experts in logging security details, forensic analysis of logs, and auditing real-world cyber crime and infraction cases.",
  },
  {
    title: "Cybersecurity Internship",
    org: "Redynox — Jul–Aug 2025",
    image: internshipRedynox,
    duration: "2 Months",
  },
  {
    title: "Networking Internship",
    org: "Zscaler (AICTE Cohort 11)",
    image: internshipNetworking,
    duration: "Cohort 11",
  },
  {
    title: "Ethical Hacking Internship",
    org: "AICTE (Cohort 10)",
    image: internshipEthicalHacking,
    duration: "Cohort 10",
  },
  {
    title: "Cybersecurity Internship",
    org: "Palo Alto Networks (AICTE Cohort 9)",
    image: internshipPaloalto,
    duration: "Cohort 9",
  },
];

const certifications = [
  {
    name: "Cyber Security Professional",
    org: "NASSCOM IT-ITeS SSC",
    category: "Silver Category",
    issued: "Issued: July 2026",
    image: nasscomCert,
    featured: true,
  },
  { name: "Foundations of Cybersecurity – Google", image: certGoogleFoundations },
  { name: "Cybersecurity Essentials – Palo Alto Networks", image: certPaloalto },
  { name: "Saviynt Identity Security (ISAA) Certification", image: certSaviynt },
  { name: "Redynox Cybersecurity Internship Certificate (2025)", image: certRedynox },
  { name: "IIFIS Certification (Globally Verified) – Pursuing", image: achievementPlaceholder },
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {internships.map((item, i) => {
              const isFeatured = item.featured;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`border overflow-hidden transition-all duration-300 group flex flex-col justify-between ${
                    isFeatured
                      ? "col-span-1 sm:col-span-2 border-primary/30 bg-gradient-to-br from-card via-card to-primary/5 shadow-[0_0_20px_rgba(34,197,94,0.05)] md:flex-row md:h-36"
                      : "border-border bg-card/60 hover:border-primary/30 h-full"
                  }`}
                >
                  {/* Image Container */}
                  <div className={`relative overflow-hidden shrink-0 ${
                    isFeatured ? "h-28 md:h-full md:w-[35%] w-full" : "h-20 w-full"
                  }`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-103 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    {isFeatured && (
                      <span className={`absolute top-2 left-2 text-[8px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm shadow-md border ${
                        item.status === "Present / Ongoing" 
                          ? "bg-emerald-500/90 text-background border-emerald-400"
                          : "bg-blue-600/90 text-foreground border-blue-400"
                      }`}>
                        {item.status || "FEATURED"}
                      </span>
                    )}
                  </div>

                  {/* Info Container */}
                  <div className="p-3 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2 mb-1">
                        <h4 className={`font-mono font-bold leading-tight ${isFeatured ? "text-xs text-primary" : "text-[10px] text-card-foreground"}`}>
                          {item.title}
                        </h4>
                        {!isFeatured && item.duration && (
                          <span className="text-[8px] font-mono text-muted-foreground shrink-0">{item.duration}</span>
                        )}
                      </div>
                      <p className={`font-semibold ${isFeatured ? "text-[10px] text-foreground mb-1.5" : "text-[9px] text-secondary"}`}>
                        {item.org}
                      </p>
                      {isFeatured && item.desc && (
                        <p className="text-[9px] text-muted-foreground font-mono leading-relaxed mb-2">
                          {item.desc}
                        </p>
                      )}
                    </div>
                    {isFeatured && (
                      <div className="flex justify-between items-center text-[8px] font-mono text-muted-foreground pt-1.5 border-t border-border/20">
                        <span>Duration: {item.duration}</span>
                        <span className="text-secondary">{item.date}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
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
                className={`border border-border bg-card/60 backdrop-blur-md overflow-hidden hover:border-primary/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.12)] border-l-2 border-l-primary/40 hover:border-l-primary transition-all duration-300 rounded flex flex-col group cursor-pointer ${cert.featured ? "sm:col-span-2 lg:col-span-3 bg-gradient-to-br from-card via-card to-primary/5" : ""}`}
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
                  {cert.featured && (
                    <span className="absolute top-2 left-2 text-[8px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm shadow-md border bg-emerald-500/90 text-background border-emerald-400">
                      Featured
                    </span>
                  )}
                </div>

                {/* Certificate Title */}
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <p className="text-[11px] font-mono text-card-foreground leading-snug group-hover:text-primary transition-colors flex items-start gap-1">
                      <span className="text-primary mt-0.5 select-none">→</span>
                      <span className="flex-1">{cert.name}</span>
                    </p>
                    {cert.featured && (
                      <div className="text-[10px] text-muted-foreground font-mono space-y-0.5 pl-4">
                        <p>{cert.org}</p>
                        <p>{cert.category}</p>
                        <p>{cert.issued}</p>
                      </div>
                    )}
                  </div>
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
