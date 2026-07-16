import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Filter, ShieldAlert, Database, Terminal, ArrowUpDown, Tag, Calendar, Eye } from "lucide-react";
import { findings, Finding } from "@/data/findings";

const severityWeight = {
  Critical: 4,
  High: 3,
  Medium: 2,
  Low: 1,
};

const SecurityResearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSeverity, setSelectedSeverity] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  // Dynamic Statistics
  const stats = useMemo(() => {
    const total = findings.length;
    const xss = findings.filter((f) => f.category === "Cross-Site Scripting").length;
    const businessLogic = findings.filter((f) => f.category === "Business Logic Vulnerability").length;
    const highSeverity = findings.filter((f) => f.severity === "High" || f.severity === "Critical").length;

    return { total, xss, businessLogic, highSeverity };
  }, []);

  // Filter & Sort logic
  const filteredAndSortedFindings = useMemo(() => {
    return findings
      .filter((finding) => {
        const matchesSearch =
          finding.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          finding.vulnerabilityType.toLowerCase().includes(searchQuery.toLowerCase()) ||
          finding.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          finding.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
          finding.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesCategory = selectedCategory === "All" || finding.category === selectedCategory;
        const matchesSeverity = selectedSeverity === "All" || finding.severity === selectedSeverity;
        const matchesYear = selectedYear === "All" || finding.date === selectedYear;

        return matchesSearch && matchesCategory && matchesSeverity && matchesYear;
      })
      .sort((a, b) => {
        if (sortBy === "newest") {
          return b.id.localeCompare(a.id); // Assuming IDs sort reasonably or we could sort by date
        }
        if (sortBy === "oldest") {
          return a.id.localeCompare(b.id);
        }
        if (sortBy === "severity") {
          return severityWeight[b.severity] - severityWeight[a.severity];
        }
        return 0;
      });
  }, [searchQuery, selectedCategory, selectedSeverity, selectedYear, sortBy]);

  // Group by Category (only categories that contain findings)
  const groupedFindings = useMemo(() => {
    const groups: { [key: string]: Finding[] } = {};
    filteredAndSortedFindings.forEach((finding) => {
      if (!groups[finding.category]) {
        groups[finding.category] = [];
      }
      groups[finding.category].push(finding);
    });
    return groups;
  }, [filteredAndSortedFindings]);

  // Get unique categories and years for dropdown filters
  const categories = useMemo(() => {
    return Array.from(new Set(findings.map((f) => f.category)));
  }, []);

  const years = useMemo(() => {
    return Array.from(new Set(findings.map((f) => f.date)));
  }, []);

  return (
    <section id="security-research" className="py-20 px-4 relative">
      {/* Visual background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display text-2xl md:text-3xl text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)] mb-2 tracking-wider">
            {"// SECURITY RESEARCH ARCHIVE"}
          </h2>
          <div className="h-px bg-gradient-to-r from-purple-500/50 to-transparent mb-4" />
          <p className="text-muted-foreground text-xs md:text-sm font-mono max-w-2xl leading-relaxed">
            "A collection of responsible disclosure reports, vulnerability research, and security findings discovered during web application assessments."
          </p>
        </motion.div>

        {/* Stats Panel */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Total Findings", value: stats.total, icon: Database, color: "text-purple-400 border-purple-500/30" },
            { label: "Business Logic", value: stats.businessLogic, icon: ShieldAlert, color: "text-blue-400 border-blue-500/30" },
            { label: "XSS Findings", value: stats.xss, icon: Terminal, color: "text-indigo-400 border-indigo-500/30" },
            { label: "High Severity", value: stats.highSeverity, icon: ShieldAlert, color: "text-violet-400 border-violet-500/30" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -2 }}
              className={`border ${item.color} bg-card/40 backdrop-blur-md p-4 flex flex-col justify-between hover:bg-card/70 transition-all duration-300 rounded shadow-md group`}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider leading-none">
                  {item.label}
                </span>
                <item.icon className={`w-4 h-4 ${item.color.split(" ")[0]} opacity-70 group-hover:opacity-100 transition-opacity`} />
              </div>
              <div className={`text-2xl font-bold font-display ${item.color.split(" ")[0]} tracking-tight`}>
                {item.value}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Search & Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-card/30 backdrop-blur-sm border border-purple-950/40 p-4 mb-8 flex flex-col gap-4 rounded"
        >
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400/70" />
            <input
              type="text"
              placeholder="Search by ID, vulnerability type, tags, severity..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-background/50 border border-purple-950/50 hover:border-purple-500/40 focus:border-purple-400/80 outline-none pl-10 pr-4 py-2 text-xs font-mono text-foreground placeholder-muted-foreground/60 transition-all rounded"
            />
          </div>

          {/* Filters and Sort */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] font-mono text-purple-400 uppercase tracking-widest flex items-center gap-1">
                <Filter className="w-3 h-3" /> Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-background/80 border border-purple-950/50 outline-none p-1.5 text-[10px] font-mono text-foreground rounded hover:border-purple-500/30 transition-all cursor-pointer"
              >
                <option value="All">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] font-mono text-purple-400 uppercase tracking-widest flex items-center gap-1">
                <ShieldAlert className="w-3 h-3" /> Severity
              </label>
              <select
                value={selectedSeverity}
                onChange={(e) => setSelectedSeverity(e.target.value)}
                className="bg-background/80 border border-purple-950/50 outline-none p-1.5 text-[10px] font-mono text-foreground rounded hover:border-purple-500/30 transition-all cursor-pointer"
              >
                <option value="All">All Severities</option>
                <option value="Critical">Critical</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] font-mono text-purple-400 uppercase tracking-widest flex items-center gap-1">
                <Calendar className="w-3 h-3" /> Year
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-background/80 border border-purple-950/50 outline-none p-1.5 text-[10px] font-mono text-foreground rounded hover:border-purple-500/30 transition-all cursor-pointer"
              >
                <option value="All">All Years</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] font-mono text-purple-400 uppercase tracking-widest flex items-center gap-1">
                <ArrowUpDown className="w-3 h-3" /> Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-background/80 border border-purple-950/50 outline-none p-1.5 text-[10px] font-mono text-foreground rounded hover:border-purple-500/30 transition-all cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="severity">Highest Severity</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Category List & Findings */}
        <div className="space-y-12">
          {Object.keys(groupedFindings).length > 0 ? (
            categories
              .filter((cat) => groupedFindings[cat] && groupedFindings[cat].length > 0)
              .map((category) => {
                const categoryFindings = groupedFindings[category];
                return (
                  <div key={category} className="space-y-4">
                    <motion.h3
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="text-xs md:text-sm font-display text-purple-300 tracking-wider flex items-center gap-2"
                    >
                      <span className="text-purple-500">❖</span> {category} ({categoryFindings.length} Finding
                      {categoryFindings.length > 1 ? "s" : ""})
                    </motion.h3>

                     <div className="grid md:grid-cols-2 gap-4">
                      {categoryFindings.map((finding, idx) => {
                        let severityColor = "text-cyan-400 border-cyan-500/30 bg-cyan-950/20";
                        let severityBorder = "border-l-cyan-500";
                        if (finding.severity === "Critical") {
                          severityColor = "text-red-400 border-red-500/30 bg-red-950/20";
                          severityBorder = "border-l-red-500";
                        } else if (finding.severity === "High") {
                          severityColor = "text-orange-400 border-orange-500/30 bg-orange-950/20";
                          severityBorder = "border-l-orange-500";
                        } else if (finding.severity === "Medium") {
                          severityColor = "text-yellow-400 border-yellow-500/30 bg-yellow-950/20";
                          severityBorder = "border-l-yellow-500";
                        }

                        return (
                          <motion.div
                            key={finding.id}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            className={`border border-purple-500/20 border-l-4 ${severityBorder} bg-card/50 hover:bg-card/85 hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.12)] transition-all duration-300 p-4 flex flex-col justify-between rounded group relative overflow-hidden`}
                          >
                            <div>
                              {/* Card Header */}
                              <div className="flex justify-between items-center mb-3">
                                <span className="text-[10px] font-mono font-bold bg-purple-950/40 text-purple-400 px-2 py-0.5 border border-purple-500/30 tracking-wider">
                                  {finding.id}
                                </span>
                                <span
                                  className={`text-[9px] font-mono font-semibold px-2 py-0.5 border ${severityColor} uppercase tracking-wider rounded-sm`}
                                >
                                  {finding.severity}
                                </span>
                              </div>

                              {/* Card Body */}
                              <h4 className="text-xs font-bold font-mono text-foreground group-hover:text-purple-300 transition-colors mb-1.5 leading-snug">
                                {finding.title}
                              </h4>
                              <div className="flex gap-4 text-[9px] text-muted-foreground font-mono mb-3">
                                <span>
                                  Type: <span className="text-purple-400">{finding.vulnerabilityType}</span>
                                </span>
                                <span>
                                  Date: <span className="text-purple-400">{finding.date}</span>
                                </span>
                              </div>
                              <p className="text-[10px] text-muted-foreground font-mono leading-relaxed mb-4">
                                {finding.summary}
                              </p>

                              {/* Simplified Non-Tech explanation block directly on the card */}
                              <div className="bg-purple-950/20 border border-purple-500/5 p-3 rounded font-mono text-[9px] text-purple-300/90 leading-relaxed mb-4 shadow-[inset_0_0_10px_rgba(168,85,247,0.03)]">
                                <span className="text-purple-400 font-bold block mb-1">💡 IN SIMPLE TERMS</span>
                                {finding.details.simplifiedExplanation}
                              </div>
                            </div>

                            {/* Tags & Action Button */}
                            <div className="space-y-3 pt-3 border-t border-purple-950/20">
                              <div className="flex flex-wrap gap-1">
                                {finding.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="text-[8px] font-mono px-1.5 py-0.5 bg-purple-950/30 text-purple-400 border border-purple-950/60 flex items-center gap-0.5 rounded-sm"
                                  >
                                    <Tag className="w-2.5 h-2.5" /> {tag}
                                  </span>
                                ))}
                              </div>

                              <Link
                                to={`/research/${finding.slug}`}
                                className="w-full inline-flex justify-center items-center gap-1.5 text-[10px] font-mono border border-purple-500/40 text-purple-400 hover:text-white hover:bg-purple-600 hover:border-purple-500 px-3 py-1.5 transition-all duration-300 rounded shadow-sm"
                              >
                                <Eye className="w-3.5 h-3.5" /> [ View Technical Report ]
                              </Link>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                );
              })
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 border border-dashed border-purple-950/40 bg-card/20 rounded"
            >
              <ShieldAlert className="w-8 h-8 text-purple-400/50 mx-auto mb-2" />
              <p className="text-xs font-mono text-muted-foreground">
                {"// NO FINDINGS FOUND MATCHING QUERY CRITERIA"}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SecurityResearchSection;
