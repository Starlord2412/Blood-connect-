import { motion } from "framer-motion";
import { Droplet } from "lucide-react";

interface BloodTypeCardProps {
  type: string;
  units: number;
  isLow?: boolean;
}

const bloodTypeColors: Record<string, { bg: string; text: string; border: string }> = {
  "A+": { bg: "bg-blood-a/10", text: "text-blood-a", border: "border-blood-a/30" },
  "A-": { bg: "bg-blood-a/10", text: "text-blood-a", border: "border-blood-a/30" },
  "B+": { bg: "bg-blood-b/10", text: "text-blood-b", border: "border-blood-b/30" },
  "B-": { bg: "bg-blood-b/10", text: "text-blood-b", border: "border-blood-b/30" },
  "AB+": { bg: "bg-blood-ab/10", text: "text-blood-ab", border: "border-blood-ab/30" },
  "AB-": { bg: "bg-blood-ab/10", text: "text-blood-ab", border: "border-blood-ab/30" },
  "O+": { bg: "bg-blood-o/10", text: "text-blood-o", border: "border-blood-o/30" },
  "O-": { bg: "bg-blood-o/10", text: "text-blood-o", border: "border-blood-o/30" },
};

export function BloodTypeCard({ type, units, isLow = false }: BloodTypeCardProps) {
  const colors = bloodTypeColors[type] || { bg: "bg-muted", text: "text-foreground", border: "border-border" };
  
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className={`relative p-4 rounded-xl border-2 ${colors.bg} ${colors.border} ${
        isLow ? "ring-2 ring-destructive/50" : ""
      }`}
    >
      {isLow && (
        <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-destructive text-destructive-foreground text-xs font-semibold rounded-full">
          Low
        </span>
      )}
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${colors.bg}`}>
          <Droplet className={`w-5 h-5 ${colors.text} fill-current`} />
        </div>
        <div>
          <p className={`text-lg font-bold font-display ${colors.text}`}>{type}</p>
          <p className="text-sm text-muted-foreground">{units} units</p>
        </div>
      </div>
    </motion.div>
  );
}
