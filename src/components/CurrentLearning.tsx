import { motion } from "framer-motion";
import { BookOpen, BookOpenCheck, Settings, Play } from "lucide-react";

const items = [
  {
    title: "PortSwigger Academy",
    value: "50 / 100",
    percentage: 50,
    status: "In Progress",
    icon: BookOpenCheck,
    color: "bg-primary",
  },
  {
    title: "Technical Blogs",
    value: "1 / 10",
    percentage: 10,
    status: "1 Published / 9 Drafting",
    icon: BookOpen,
    color: "bg-purple-500",
  },
  {
    title: "Flagship Project",
    value: "Planning",
    percentage: 15,
    status: "Architecture Design",
    icon: Settings,
    color: "bg-blue-500",
  },
  {
    title: "eJPT Certification",
    value: "Upcoming",
    percentage: 0,
    status: "Scheduled Q3",
    icon: Play,
    color: "bg-yellow-500",
  },
];

const CurrentLearning = () => {
  return (
    <div className="border border-purple-500/20 bg-card p-6 rounded shadow-md relative group hover:border-purple-500/40 transition-all duration-300">
      {/* Title */}
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-5 h-5 text-purple-400" />
        <h3 className="font-display text-sm tracking-wider text-purple-400 group-hover:drop-shadow-[0_0_5px_rgba(168,85,247,0.4)] transition-all">
          CURRENT_LEARNING_OBJECTIVES
        </h3>
      </div>

      {/* Progress Cards list */}
      <div className="space-y-4">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="font-mono text-xs space-y-1">
              <div className="flex justify-between items-center text-muted-foreground">
                <span className="flex items-center gap-1.5 font-bold text-foreground">
                  <Icon className="w-3.5 h-3.5 opacity-80" />
                  {item.title}
                </span>
                <span className="text-[10px] text-muted-foreground">{item.value}</span>
              </div>

              {/* Progress track */}
              <div className="w-full bg-muted h-1.5 border border-border overflow-hidden rounded-sm relative">
                {item.percentage > 0 && (
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: idx * 0.05 }}
                    className={`${item.color} h-full`}
                  />
                )}
              </div>

              {/* Status footer */}
              <div className="flex justify-between text-[8px] text-muted-foreground uppercase tracking-wider">
                <span>Status</span>
                <span className="text-secondary">{item.status}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurrentLearning;
