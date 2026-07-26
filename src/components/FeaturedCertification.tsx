import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Check, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import nasscomCert from "@/assets/cert-nasscom-2026.png";

const FeaturedCertification = () => {
  const [open, setOpen] = useState(false);

  const cert = {
    title: "Cyber Security Professional",
    issuer: "NASSCOM IT-ITeS Sector Skills Council (SSC)",
    support: "Ministry of Electronics & Information Technology (MeitY), Government of India",
    achievement: "Successfully cleared the Cyber Security Professional assessment",
    issued: "July 2026",
    image: nasscomCert,
    verifyUrl: "https://inspiration-fun-7467.my.salesforce-sites.com/CDACcertificatePage2?id=a02Vy00001IcS2bIAF",
  };

  return (
    <section id="featured-cert" className="py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Title intentionally removed to keep the card visually prominent without a header */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-lg p-4 bg-gradient-to-br from-card/60 to-card/40 border border-border/30 shadow-[0_8px_40px_rgba(34,197,94,0.08)] neon-border"
        >
          <div className="absolute -inset-0.5 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* NEW badge */}
          <div className="absolute top-3 right-3">
            <span className="inline-block bg-emerald-500/95 text-background text-[10px] font-mono px-2 py-1 rounded-full shadow-[0_6px_18px_rgba(34,197,94,0.18)] animate-pulse">NEW</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="md:col-span-1">
              <div className="relative rounded-md overflow-hidden border border-primary/15 bg-white/5 shadow-[inset_0_0_30px_rgba(34,197,94,0.03)]">
                <img src={cert.image} alt={cert.title} className="w-full h-40 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-lg font-display font-bold neon-text-strong mb-1">{cert.title}</h4>
              <p className="text-[12px] text-muted-foreground font-mono mb-2">Issued by: {cert.issuer}</p>
              <p className="text-[12px] text-muted-foreground font-mono mb-2">Supported by: {cert.support}</p>
              <p className="text-[13px] text-card-foreground font-mono mb-3">{cert.achievement}</p>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setOpen(true)}
                  className="px-4 py-2 bg-transparent border border-primary text-primary font-mono text-sm rounded hover:bg-primary/8 transition-all duration-200 flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" /> View Certificate
                </button>

                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-emerald-600 text-background font-mono text-sm rounded shadow-sm flex items-center gap-2 hover:brightness-105 transition"
                  >
                    <ExternalLink className="w-4 h-4" /> Verify
                  </a>
                ) : (
                  <button className="px-4 py-2 bg-muted-foreground/10 text-muted-foreground font-mono text-sm rounded flex items-center gap-2" disabled>
                    <Check className="w-4 h-4" /> Verification Unavailable
                  </button>
                )}
              </div>

              <div className="mt-4 text-[12px] text-muted-foreground font-mono">Issued: {cert.issued}</div>
            </div>
          </div>

          {/* Modal */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-3xl w-full">
              <DialogHeader>
                <DialogTitle>{cert.title} — Certificate Preview</DialogTitle>
              </DialogHeader>
              <div className="mt-2">
                <img src={cert.image} alt="certificate" className="w-full h-auto rounded" />
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCertification;
