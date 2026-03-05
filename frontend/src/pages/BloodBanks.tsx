import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BloodBankCard } from "@/components/blood/BloodBankCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter , MapPin } from "lucide-react";

// Mock data for blood banks
const mockBloodBanks = [
  {
    id: "1",
    name: "City Central Blood Bank",
    address: "123 Medical Center Drive, Downtown",
    phone: "+1 (555) 123-4567",
    distance: "0.5 mi",
    isOpen: true,
    inventory: { "A+": 45, "A-": 12, "B+": 32, "B-": 8, "AB+": 15, "AB-": 3, "O+": 52, "O-": 18 },
  },
  {
    id: "2",
    name: "Regional Hospital Blood Center",
    address: "456 Healthcare Boulevard, Medical District",
    phone: "+1 (555) 234-5678",
    distance: "1.2 mi",
    isOpen: true,
    inventory: { "A+": 28, "A-": 5, "B+": 41, "B-": 11, "AB+": 8, "AB-": 2, "O+": 38, "O-": 9 },
  },
  {
    id: "3",
    name: "Community Blood Services",
    address: "789 Donation Lane, Westside",
    phone: "+1 (555) 345-6789",
    distance: "2.8 mi",
    isOpen: false,
    inventory: { "A+": 35, "A-": 15, "B+": 22, "B-": 6, "AB+": 12, "AB-": 4, "O+": 45, "O-": 20 },
  },
  {
    id: "4",
    name: "University Medical Blood Bank",
    address: "321 Campus Drive, University District",
    phone: "+1 (555) 456-7890",
    distance: "3.5 mi",
    isOpen: true,
    inventory: { "A+": 55, "A-": 18, "B+": 29, "B-": 9, "AB+": 11, "AB-": 5, "O+": 62, "O-": 25 },
  },
];

export default function BloodBanks() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBanks = mockBloodBanks.filter(
    (bank) =>
      bank.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bank.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-primary-foreground"
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                Blood Bank Directory
              </h1>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                Find verified blood banks near you with real-time blood availability
              </p>

              {/* Search Bar */}
              <div className="max-w-xl mx-auto flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Search by name or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-background/95 border-0"
                  />
                </div>
                <Button variant="outline-hero">
                  <Filter className="w-4 h-4" />
                  Filter
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">
                  Showing <strong className="text-foreground">{filteredBanks.length}</strong> blood banks near you
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredBanks.map((bank, index) => (
                <motion.div
                  key={bank.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <BloodBankCard {...bank} />
                </motion.div>
              ))}
            </div>

            {filteredBanks.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No blood banks found matching your search.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
