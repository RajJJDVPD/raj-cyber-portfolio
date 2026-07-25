import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import projectCyberReq from "@/assets/project-cyberreq.jpg";
import projectCyberX from "@/assets/project-cyberx.jpg";
import projectKeyPulse from "@/assets/project-keypulse.jpg";

const projects = [
  {
    name: "CYBER-REQ",
    subtitle: "HTTP Request Flood Simulation Tool",
    tech: ["Python", "Tkinter", "Threading"],
    icon: "⚡",
    image: projectCyberReq,
    loc: "~800 Lines of Code",
    architecture: "Desktop GUI with Threaded Worker Pools",
    github: "https://github.com/RajJJDVPD/CYBER-REQ",
    demo: null,
    docs: "https://github.com/RajJJDVPD/CYBER-REQ#readme",
  },
  {
    name: "CYBER X",
    subtitle: "Malware Scanner using YARA Rules",
    tech: ["Flask", "HTML", "YARA Rules", "Python"],
    icon: "🔬",
    image: projectCyberX,
    loc: "~1,200 Lines of Code",
    architecture: "Client-Server / Binary Scan Engine",
    github: "https://github.com/RajJJDVPD/CYBER-X",
    demo: "https://cyber-x-malware-scanner.vercel.app/",
    docs: "https://cyber-x-malware-scanner.vercel.app/",
  },
  {
    name: "CYBER-KEY-PULSE",
    subtitle: "Keylogger Simulation Project",
    tech: ["Python", "Pynput", "Tkinter"],
    icon: "⌨️",
    image: projectKeyPulse,
    loc: "~600 Lines of Code",
    architecture: "Threaded Event Hook Background Listener",
    github: "https://github.com/RajJJDVPD/CYBER-KEY-PULSE",
    demo: null,
    docs: "https://github.com/RajJJDVPD/CYBER-KEY-PULSE#readme",
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
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300 group neon-border flex flex-col justify-between"
            >
              <div>
                <div className="relative h-28 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>
                
                <div className="p-3">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="text-sm">{project.icon}</span>
                    <h3 className="font-display text-xs text-primary tracking-wider group-hover:neon-text transition-all">
                      {project.name}
                    </h3>
                  </div>
                  <p className="text-secondary text-[10px] font-mono mb-2">{project.subtitle}</p>
                  
                  {/* Architecture & LoC info */}
                  <div className="space-y-1 text-[9px] font-mono text-muted-foreground border-y border-border/25 py-2 mb-3">
                    <div>
                      <span className="text-primary font-bold">{">"}</span> LoC: <span className="text-foreground">{project.loc}</span>
                    </div>
                    <div>
                      <span className="text-primary font-bold">{">"}</span> Arch: <span className="text-foreground">{project.architecture}</span>
                    </div>
                  </div>

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
              </div>

              {/* Action Buttons */}
              <div className="p-3 pt-0 flex gap-2 mt-auto border-t border-border/10">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1 text-[9px] font-mono border border-border text-muted-foreground hover:text-primary hover:border-primary/50 py-1 transition-all rounded"
                  >
                    <Github className="w-3 h-3" /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1 text-[9px] font-mono border border-primary text-primary hover:bg-primary/20 py-1 transition-all rounded text-center"
                  >
                    <ExternalLink className="w-3 h-3" /> Demo
                  </a>
                )}
                {project.docs && (
                  <a
                    href={project.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1 text-[9px] font-mono border border-secondary text-secondary hover:bg-secondary/20 py-1 transition-all rounded text-center"
                  >
                    Docs
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
