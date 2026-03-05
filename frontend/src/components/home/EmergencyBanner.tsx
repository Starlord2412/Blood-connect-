import { motion } from "framer-motion";
import { AlertTriangle, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmergencyBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-emergency text-primary-foreground py-3"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 animate-pulse" />
            <span className="font-semibold">Emergency Blood Needed:</span>
            <span className="font-medium">O- and A+ critically low</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:1800-BLOOD-NOW"
              className="flex items-center gap-1 font-semibold hover:underline"
            >
              <Phone className="w-4 h-4" />
              1800-BLOOD-NOW
            </a>
            <Button
              variant="outline-hero"
              size="sm"
              className="gap-1"
            >
              Donate Now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
