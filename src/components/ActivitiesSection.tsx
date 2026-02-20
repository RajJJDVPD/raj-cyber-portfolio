import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import activityNcc from "@/assets/activity-ncc-placeholder.jpg";
import activityScuba from "@/assets/activity-scuba-placeholder.jpg";
import activityShip from "@/assets/activity-ship-placeholder.jpg";
import activityHackathon from "@/assets/activity-hackathon-placeholder.jpg";
import activityBsides from "@/assets/activity-bsides-placeholder.jpg";

const activities = [
  {
    title: "NCC C Certificate Holder",
    description:
      "Proud holder of the NCC C Certificate, demonstrating commitment to national service, leadership, and discipline through rigorous military training and camp participation.",
    image: activityNcc,
  },
  {
    title: "SCUBA Diving Adventure Camp",
    description:
      "Participated in a prestigious SCUBA Diving Adventure Camp, receiving professional training in scuba diving. This experience instilled discipline, teamwork, and resilience beyond the classroom.",
    image: activityScuba,
  },
  {
    title: "All India Ship Attachment Camp – Mumbai",
    description:
      "Completed the All India Ship Attachment Camp in Mumbai. Visited Gateway of India, Western Naval Command, and Naval Air Base. Viewed ships including INS Imphal, INS Talwar, INS Kolkata, INS Viraat, and INS Vagir, deepening understanding of naval operations and leadership.",
    image: activityShip,
  },
  {
    title: "Infinium Hackathon – IIIT Hyderabad",
    description:
      "Participated in the Infinium Hackathon at IIIT Hyderabad, competing in Capture The Flag (CTF) cybersecurity challenges. Tested skills in cryptography, reverse engineering, and vulnerability exploitation in a competitive environment.",
    image: activityHackathon,
  },
  {
    title: "BSides Vizag 2025",
    description:
      "Attended BSides Vizag 2025 in Visakhapatnam, interacting with cybersecurity professionals and officials. Gained valuable knowledge about real-world security practices, current trends, and career paths in the cybersecurity field.",
    image: activityBsides,
  },
];

const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl md:text-3xl text-primary neon-text mb-2 tracking-wider">
            {"// EXTRA CURRICULAR"}
          </h2>
          <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.04 }}
              className="border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300 group cursor-default"
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500 group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>
              <div className="p-3">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Activity className="w-3 h-3 text-primary" />
                  <h3 className="font-display text-xs text-primary tracking-wider">{item.title}</h3>
                </div>
                <p className="text-[10px] font-mono text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
