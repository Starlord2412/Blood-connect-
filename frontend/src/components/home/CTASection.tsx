import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, ArrowRight, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary-foreground rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-primary-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-2 border-primary-foreground rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heart className="w-16 h-16 text-primary-foreground/80 mx-auto mb-6 animate-heartbeat" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-10 max-w-xl mx-auto">
              Whether you want to donate blood or register your blood bank, 
              join our platform and help save lives in your community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="outline-hero" size="xl" asChild>
              <Link to="/register">
                <Heart className="w-5 h-5" />
                Register as Donor
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="xl"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <Link to="/register?type=bloodbank">
                <Building2 className="w-5 h-5" />
                Register Blood Bank
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
