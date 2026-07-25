import { motion } from "framer-motion";
import { Terminal, Send, CheckCircle2 } from "lucide-react";

const positions = [
  "Junior Application Security Engineer",
  "Junior Security Analyst",
  "VAPT Engineer / Pen Tester",
];

const RecruiterSection = () => {
  return (
    <section id="hiring" className="py-12 px-4 relative bg-background border-t border-border/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border border-primary/30 bg-card p-6 md:p-8 rounded relative overflow-hidden group hover:border-primary/50 transition-all duration-300"
        >
          {/* Neon scan lines background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent pointer-events-none" />

          <div className="grid md:grid-cols-5 gap-6 items-center font-mono">
            {/* Status Information */}
            <div className="md:col-span-3 space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <Terminal className="w-4 h-4" />
                <span className="text-xs uppercase tracking-widest font-bold">Recruitment Status Dashboard</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-foreground text-sm font-bold uppercase tracking-wider">
                  {">"} CURRENTLY LOOKING FOR:
                </h3>
                <div className="space-y-1.5 pl-4">
                  {positions.map((pos) => (
                    <div key={pos} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{pos}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Relocation and Availability */}
              <div className="grid grid-cols-2 gap-4 border-t border-border/20 pt-4 text-xs">
                <div>
                  <span className="text-muted-foreground uppercase block text-[9px] tracking-wider mb-0.5">Open to Relocation</span>
                  <span className="text-primary font-bold uppercase">✓ Yes, Active</span>
                </div>
                <div>
                  <span className="text-muted-foreground uppercase block text-[9px] tracking-wider mb-0.5">Availability</span>
                  <span className="text-primary font-bold uppercase">✓ Available Immediately</span>
                </div>
              </div>
            </div>

            {/* CTA Contact Button */}
            <div className="md:col-span-2 flex flex-col items-center justify-center text-center">
              <div className="border border-primary/20 bg-primary/5 p-4 rounded text-center w-full">
                <p className="text-[10px] text-muted-foreground mb-3 leading-relaxed">
                  Looking to fill an AppSec or VAPT opening? Let's connect and review my detailed vulnerability reports.
                </p>
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs hover:bg-primary/90 py-2.5 transition-all duration-300 neon-border font-bold"
                >
                  <Send className="w-3.5 h-3.5" /> Send Message
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecruiterSection;
