import { motion } from "framer-motion";
import { Droplet } from "lucide-react";

const bloodTypes = [
  { type: "O-", canDonateTo: "All Types", canReceiveFrom: "O-", special: "Universal Donor" },
  { type: "O+", canDonateTo: "O+, A+, B+, AB+", canReceiveFrom: "O-, O+" },
  { type: "A-", canDonateTo: "A-, A+, AB-, AB+", canReceiveFrom: "O-, A-" },
  { type: "A+", canDonateTo: "A+, AB+", canReceiveFrom: "O-, O+, A-, A+" },
  { type: "B-", canDonateTo: "B-, B+, AB-, AB+", canReceiveFrom: "O-, B-" },
  { type: "B+", canDonateTo: "B+, AB+", canReceiveFrom: "O-, O+, B-, B+" },
  { type: "AB-", canDonateTo: "AB-, AB+", canReceiveFrom: "O-, A-, B-, AB-" },
  { type: "AB+", canDonateTo: "AB+", canReceiveFrom: "All Types", special: "Universal Recipient" },
];

export function BloodTypesSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Blood Compatibility
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Understanding Blood Types
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn about blood type compatibility to understand who can donate to whom 
            and why certain blood types are always in high demand.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {bloodTypes.map((blood, index) => (
            <motion.div
              key={blood.type}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="relative bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              {blood.special && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full whitespace-nowrap">
                  {blood.special}
                </span>
              )}
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <Droplet className="w-16 h-16 text-primary fill-primary/20" />
                  <span className="absolute inset-0 flex items-center justify-center font-display text-xl font-bold text-primary">
                    {blood.type}
                  </span>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-muted-foreground">Can donate to:</p>
                  <p className="font-medium text-foreground">{blood.canDonateTo}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Can receive from:</p>
                  <p className="font-medium text-foreground">{blood.canReceiveFrom}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
