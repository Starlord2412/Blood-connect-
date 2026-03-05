import { motion } from "framer-motion";
import { MapPin, Clock, Shield, Users, Droplet, Bell } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Find Nearby Blood Banks",
    description: "Locate blood banks in your area with real-time availability and directions.",
  },
  {
    icon: Clock,
    title: "Real-Time Inventory",
    description: "Check live blood availability across all blood types instantly.",
  },
  {
    icon: Shield,
    title: "Verified & Secure",
    description: "All blood banks are verified. Your data is protected with enterprise security.",
  },
  {
    icon: Users,
    title: "Donor Network",
    description: "Connect with a community of donors ready to help in emergencies.",
  },
  {
    icon: Droplet,
    title: "All Blood Types",
    description: "Track all 8 blood types: A+, A-, B+, B-, AB+, AB-, O+, O-.",
  },
  {
    icon: Bell,
    title: "Emergency Alerts",
    description: "Get notified when your blood type is urgently needed nearby.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Everything You Need to Save Lives
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform connects donors, recipients, and blood banks seamlessly, 
            making blood donation accessible and efficient.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
