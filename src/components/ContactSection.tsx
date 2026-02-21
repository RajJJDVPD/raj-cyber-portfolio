import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "rajkumar0yarra@gmail.com",
    href: "mailto:rajkumar0yarra@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7036331440",
    href: "tel:+917036331440",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "yarra-raj-kumar",
    href: "https://www.linkedin.com/in/rajkumar-yarra-363833297/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "RajJJDVPD",
    href: "https://github.com/RajJJDVPD",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl md:text-3xl text-primary neon-text mb-2 tracking-wider">
            {"// CONTACT"}
          </h2>
          <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border border-border bg-card p-6 neon-border"
        >
          <div className="text-xs text-muted-foreground font-mono mb-4">
            $ ./initiate_connection.sh
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {contacts.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 border border-border hover:border-primary/50 transition-all group"
              >
                <c.icon className="w-4 h-4 text-secondary group-hover:text-primary transition-colors flex-shrink-0" />
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{c.label}</p>
                  <p className="text-xs text-card-foreground group-hover:text-primary transition-colors font-mono">
                    {c.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-xs text-muted-foreground font-mono">
            <span className="text-primary">{">"}</span> Designed & Built by Yarra Rajkumar
          </p>
          <p className="text-[10px] text-muted-foreground/50 font-mono mt-1">
            © {new Date().getFullYear()} — All systems secured.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
