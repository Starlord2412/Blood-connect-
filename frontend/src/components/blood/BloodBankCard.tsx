import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BloodTypeCard } from "./BloodTypeCard";
import { Link } from "react-router-dom";

interface BloodInventory {
  "A+": number;
  "A-": number;
  "B+": number;
  "B-": number;
  "AB+": number;
  "AB-": number;
  "O+": number;
  "O-": number;
}

interface BloodBankCardProps {
  id: string;
  name: string;
  address: string;
  phone: string;
  distance?: string;
  isOpen?: boolean;
  inventory: BloodInventory;
}

export function BloodBankCard({
  id,
  name,
  address,
  phone,
  distance,
  isOpen = true,
  inventory,
}: BloodBankCardProps) {
  const topTypes = Object.entries(inventory)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="bg-card rounded-2xl border border-border shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-display text-lg font-bold text-foreground mb-1">{name}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="line-clamp-1">{address}</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-1">
            {distance && (
              <span className="px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                {distance}
              </span>
            )}
            <span
              className={`flex items-center gap-1 text-xs font-medium ${
                isOpen ? "text-success" : "text-muted-foreground"
              }`}
            >
              <Clock className="w-3 h-3" />
              {isOpen ? "Open Now" : "Closed"}
            </span>
          </div>
        </div>

        {/* Contact */}
        <a
          href={`tel:${phone}`}
          className="flex items-center gap-2 text-sm text-primary hover:underline mb-4"
        >
          <Phone className="w-4 h-4" />
          {phone}
        </a>

        {/* Blood Inventory Preview */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {topTypes.map(([type, units]) => (
            <BloodTypeCard
              key={type}
              type={type}
              units={units}
              isLow={units < 5}
            />
          ))}
        </div>

        {/* Action */}
        <Button variant="outline" className="w-full group" asChild>
          <Link to={`/blood-banks/${id}`}>
            View Details
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}
