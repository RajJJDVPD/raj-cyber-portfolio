import { motion } from "framer-motion";
import { ExternalLink, Code, Github } from "lucide-react";
import projectCyberReq from "@/assets/project-cyberreq.jpg";
import projectCyberX from "@/assets/project-cyberx.jpg";
import projectKeyPulse from "@/assets/project-keypulse.jpg";

const projects = [
  {
    name: "CYBER-REQ",
    subtitle: "HTTP Request Flood Simulation Tool",
    tech: ["Python", "Tkinter"],
    description:
      "GUI-based cybersecurity testing tool that generates controlled HTTP request loads with customizable delay and real-time logging.",
    icon: "⚡",
    image: projectCyberReq,
    github: "https://github.com/RajJJDVPD/CYBER-REQ",
  },
  {
    name: "CYBER X",
    subtitle: "Malware Scanner using YARA Rules",
    tech: ["Flask", "HTML", "YARA"],
    description:
      "Web-based malware scanning application that analyzes uploaded files using YARA rule matching and provides detailed scan reports.",
    icon: "🔬",
    image: projectCyberX,
    link: "https://cyberx-malware-scanner.onrender.com/",
  },
  {
    name: "CYBER-KEY-PULSE",
    subtitle: "Keylogger Simulation Project",
    tech: ["Python", "Pynput", "Tkinter"],
    description:
      "Educational keylogger simulator to understand keystroke capture mechanisms with export functionality and GUI controls.",
    icon: "⌨️",
    image: projectKeyPulse,
    github: "https://github.com/RajJJDVPD/CYBER-KEY-PULSE",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
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
          <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-8" />
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300 group neon-border"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <div className="absolute top-3 right-3 flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background/80 backdrop-blur-sm border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-background/80 backdrop-blur-sm border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{project.icon}</span>
                      <h3 className="font-display text-sm text-primary tracking-wider group-hover:neon-text transition-all">
                        {project.name}
                      </h3>
                    </div>
                    <p className="text-secondary text-xs font-mono">{project.subtitle}</p>
                  </div>
                  <Code className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
