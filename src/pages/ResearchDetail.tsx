import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldAlert, Terminal, Eye, FileText, Info, Award, Calendar, CheckCircle } from "lucide-react";
import { findings } from "@/data/findings";
import Navbar from "@/components/Navbar";
import MatrixRain from "@/components/MatrixRain";
import sqliBanner from "@/assets/sqli-banner.png";
import xssBanner from "@/assets/xss-banner.png";
import businessLogicBanner from "@/assets/business-logic-banner.png";
import sqliCredentialsBanner from "@/assets/sqli-credentials-banner.png";

const ResearchDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const finding = findings.find((f) => f.slug === slug);

  if (!finding) {
    return (
      <div className="relative min-h-screen bg-background scanline">
        <MatrixRain />
        <Navbar />
        <div className="relative z-10 pt-32 px-4 max-w-xl mx-auto text-center">
          <ShieldAlert className="w-16 h-16 text-red-500 mx-auto mb-4 animate-pulse" />
          <h2 className="font-display text-xl text-red-400 mb-2">{"// ERROR: REPORT NOT FOUND"}</h2>
          <p className="text-xs font-mono text-muted-foreground mb-6">
            The requested security research record does not exist or has been restricted.
          </p>
          <Link
            to="/#security-research"
            className="inline-flex items-center gap-2 text-xs font-mono border border-primary text-primary px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Database
          </Link>
        </div>
      </div>
    );
  }

  let severityColor = "text-cyan-400 border-cyan-500/30 bg-cyan-950/20";
  let severityGlow = "shadow-[0_0_15px_rgba(34,211,238,0.1)]";
  if (finding.severity === "Critical") {
    severityColor = "text-red-400 border-red-500/30 bg-red-950/20";
    severityGlow = "shadow-[0_0_15px_rgba(248,113,113,0.15)]";
  } else if (finding.severity === "High") {
    severityColor = "text-orange-400 border-orange-500/30 bg-orange-950/20";
    severityGlow = "shadow-[0_0_15px_rgba(251,146,60,0.15)]";
  } else if (finding.severity === "Medium") {
    severityColor = "text-yellow-400 border-yellow-500/30 bg-yellow-950/20";
    severityGlow = "shadow-[0_0_15px_rgba(250,204,21,0.1)]";
  }

  const getBannerImage = () => {
    if (finding.id === "SQLI-008") {
      return sqliCredentialsBanner;
    }
    if (finding.category === "Cross-Site Scripting") {
      return xssBanner;
    }
    if (finding.category === "Business Logic Vulnerability") {
      return businessLogicBanner;
    }
    return sqliBanner;
  };

  const banner = getBannerImage();

  return (
    <div className="relative min-h-screen bg-background scanline">
      <MatrixRain />
      <Navbar />

      <main className="relative z-10 pt-28 px-4 pb-24 max-w-4xl mx-auto">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/#security-research"
            className="inline-flex items-center gap-2 text-[10px] font-mono border border-purple-500/40 text-purple-400 hover:text-white hover:bg-purple-600 px-3 py-1.5 transition-all duration-300 rounded"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> [ Back to Research Archive ]
          </Link>
        </div>

        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="border border-purple-500/30 bg-card/60 backdrop-blur-md mb-8 rounded relative overflow-hidden flex flex-col md:flex-row gap-6 p-6"
        >
          {/* Banner Column */}
          <div className="w-full md:w-1/3 shrink-0 h-40 md:h-auto border border-purple-500/20 rounded overflow-hidden relative bg-black/40">
            <img src={banner} alt={finding.title} className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-card/10 to-card md:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:hidden block" />
          </div>

          {/* Info Column */}
          <div className="flex-1 relative">
            <div className="absolute top-0 right-0 p-1 text-[8px] font-mono bg-purple-500/20 text-purple-300 px-2 rounded-bl uppercase tracking-widest border-l border-b border-purple-500/30">
              Intel Report // Classified
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-4 mt-4 md:mt-2">
              <span className="text-xs font-mono font-bold bg-purple-950/40 text-purple-400 px-3 py-1 border border-purple-500/40 tracking-wider">
                {finding.id}
              </span>
              <span className={`text-[10px] font-mono font-semibold px-2.5 py-0.5 border ${severityColor} ${severityGlow} uppercase tracking-wider rounded-sm`}>
                {finding.severity} Severity
              </span>
              <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-purple-400" /> {finding.date}
              </span>
            </div>

            <h1 className="font-display text-xl md:text-2xl text-foreground mb-3 leading-tight tracking-wider">
              {finding.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-[10px] text-muted-foreground font-mono">
              <div>
                Category: <span className="text-purple-400">{finding.category}</span>
              </div>
              <div>
                Vulnerability Type: <span className="text-purple-400">{finding.vulnerabilityType}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Simplified Explanation Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="border border-purple-500/30 bg-purple-950/20 p-5 mb-8 rounded relative overflow-hidden shadow-[inset_0_0_15px_rgba(168,85,247,0.05)]"
        >
          <div className="flex gap-3 text-purple-300">
            <Info className="w-5 h-5 shrink-0 mt-0.5 text-purple-400" />
            <div className="font-mono text-xs leading-relaxed">
              <span className="font-bold uppercase tracking-wider block text-purple-400 mb-1">💡 IN SIMPLE TERMS (Non-Technical Summary)</span>
              {finding.details.simplifiedExplanation}
            </div>
          </div>
        </motion.div>

        {/* Safety Warning Banner */}
        <div className="border border-yellow-500/20 bg-yellow-950/10 p-4 mb-8 flex gap-3 rounded text-yellow-400/95">
          <Info className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="font-mono text-[10px] leading-relaxed">
            <span className="font-bold uppercase tracking-wider block mb-0.5">DISCLOSURE SAFETY NOTICE</span>
            To comply with responsible disclosure policies and client confidentiality agreements, all identifying information, including hostnames, IP addresses, client branding, and working exploit scripts, has been redacted. The code snippets and logs presented below are simplified, generic representations designed strictly for academic and educational demonstration.
          </div>
        </div>

        {/* Report Sections */}
        <div className="space-y-8 font-mono">
          {/* 1. Executive Summary */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-l-2 border-purple-500 pl-4 space-y-2"
          >
            <h3 className="text-xs font-bold font-display text-purple-300 uppercase tracking-widest flex items-center gap-2">
              <FileText className="w-4 h-4 text-purple-400" /> 1. Executive Summary
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {finding.details.executiveSummary}
            </p>
          </motion.section>

          {/* 2. Vulnerability Overview */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-l-2 border-purple-500 pl-4 space-y-2"
          >
            <h3 className="text-xs font-bold font-display text-purple-300 uppercase tracking-widest flex items-center gap-2">
              <Terminal className="w-4 h-4 text-purple-400" /> 2. Vulnerability Overview
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {finding.details.vulnerabilityOverview}
            </p>
          </motion.section>

          {/* 3. Discovery Methodology */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-l-2 border-purple-500 pl-4 space-y-2"
          >
            <h3 className="text-xs font-bold font-display text-purple-300 uppercase tracking-widest flex items-center gap-2">
              <Eye className="w-4 h-4 text-purple-400" /> 3. Discovery Methodology
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {finding.details.discoveryMethodology}
            </p>
          </motion.section>

          {/* 4. Security Impact */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-l-2 border-purple-500 pl-4 space-y-2"
          >
            <h3 className="text-xs font-bold font-display text-purple-300 uppercase tracking-widest flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-purple-400" /> 4. Security Impact
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {finding.details.securityImpact}
            </p>
          </motion.section>

          {/* 5. Responsible Disclosure Status */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-l-2 border-purple-500 pl-4 space-y-2"
          >
            <h3 className="text-xs font-bold font-display text-purple-300 uppercase tracking-widest flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-purple-400" /> 5. Responsible Disclosure Status
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {finding.details.responsibleDisclosureStatus}
            </p>
          </motion.section>

          {/* 6. Lessons Learned */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-l-2 border-purple-500 pl-4 space-y-2"
          >
            <h3 className="text-xs font-bold font-display text-purple-300 uppercase tracking-widest flex items-center gap-2">
              <Award className="w-4 h-4 text-purple-400" /> 6. Lessons Learned
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {finding.details.lessonsLearned}
            </p>
          </motion.section>

          {/* 7. References */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-l-2 border-purple-500 pl-4 space-y-2"
          >
            <h3 className="text-xs font-bold font-display text-purple-300 uppercase tracking-widest flex items-center gap-2">
              <Info className="w-4 h-4 text-purple-400" /> 7. References
            </h3>
            <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
              {finding.details.references.map((ref, idx) => (
                <li key={idx} className="hover:text-purple-400 transition-colors">
                  {ref}
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-purple-950/40 flex justify-center">
          <Link
            to="/#security-research"
            className="inline-flex items-center gap-2 text-[10px] font-mono border border-purple-500/40 text-purple-400 hover:text-white hover:bg-purple-600 px-4 py-2 transition-all duration-300 rounded"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> [ Return to Database ]
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ResearchDetail;
