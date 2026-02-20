import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import projectCyberReq from "@/assets/project-cyberreq.jpg";
import projectCyberX from "@/assets/project-cyberx.jpg";
import projectKeyPulse from "@/assets/project-keypulse.jpg";

const projects = [
  {
    name: "CYBER-REQ",
    subtitle: "HTTP Request Flood Simulation Tool",
    tech: ["Python", "Tkinter"],
    icon: "⚡",
    image: projectCyberReq,
    link: "https://github.com/RajJJDVPD/CYBER-REQ",
    isGithub: true,
  },
  {
    name: "CYBER X",
    subtitle: "Malware Scanner using YARA Rules",
    tech: ["Flask", "HTML", "YARA"],
    icon: "🔬",
    image: projectCyberX,
    link: "https://cyberx-malware-scanner.onrender.com/",
    isGithub: false,
  },
  {
    name: "CYBER-KEY-PULSE",
    subtitle: "Keylogger Simulation Project",
    tech: ["Python", "Pynput", "Tkinter"],
    icon: "⌨️",
    image: projectKeyPulse,
    link: "https://github.com/RajJJDVPD/CYBER-KEY-PULSE",
    isGithub: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl md:text-3xl text-primary neon-text mb-2 tracking-wider">
            {"// PROJECTS"}
          </h2>
          <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300 group neon-border cursor-pointer block"
            >
              <div className="relative h-28 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute top-2 right-2">
                  {project.isGithub ? (
                    <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  ) : (
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </div>
              </div>
              <div className="p-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-sm">{project.icon}</span>
                  <h3 className="font-display text-xs text-primary tracking-wider group-hover:neon-text transition-all">
                    {project.name}
                  </h3>
                </div>
                <p className="text-secondary text-[10px] font-mono mb-2">{project.subtitle}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-mono px-1.5 py-0.5 bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
