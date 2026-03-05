import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BloodTypeCard } from "@/components/blood/BloodTypeCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Droplet, 
  Users, 
  Building2, 
  TrendingUp, 
  Calendar, 
  Heart,
  Bell,
  Settings,
  Plus
} from "lucide-react";

// Mock dashboard data
const bloodInventory = {
  "A+": 45,
  "A-": 12,
  "B+": 32,
  "B-": 8,
  "AB+": 15,
  "AB-": 3,
  "O+": 52,
  "O-": 18,
};

const recentDonations = [
  { id: 1, donor: "John D.", bloodType: "O+", date: "2024-01-15", status: "completed" },
  { id: 2, donor: "Sarah M.", bloodType: "A-", date: "2024-01-14", status: "completed" },
  { id: 3, donor: "Mike R.", bloodType: "B+", date: "2024-01-14", status: "pending" },
  { id: 4, donor: "Lisa K.", bloodType: "AB+", date: "2024-01-13", status: "completed" },
];

const stats = [
  { label: "Total Donations", value: "1,234", icon: Droplet, trend: "+12%" },
  { label: "Active Donors", value: "856", icon: Users, trend: "+5%" },
  { label: "Blood Banks", value: "24", icon: Building2, trend: "+2" },
  { label: "Lives Saved", value: "3,702", icon: Heart, trend: "+18%" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="font-display text-3xl font-bold text-foreground">
                Blood Availability Dashboard
              </h1>
              <p className="text-muted-foreground mt-1">
                Real-time blood inventory across all connected blood banks
              </p>
            </motion.div>

            <div className="flex gap-3">
              <Button variant="outline">
                <Bell className="w-4 h-4" />
                Alerts
              </Button>
              <Button variant="outline">
                <Settings className="w-4 h-4" />
                Settings
              </Button>
              <Button>
                <Plus className="w-4 h-4" />
                Add Donation
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          >
            {stats.map((stat, index) => (
              <Card key={stat.label} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mt-3">
                    <TrendingUp className="w-4 h-4 text-success" />
                    <span className="text-sm text-success font-medium">{stat.trend}</span>
                    <span className="text-sm text-muted-foreground">vs last month</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Blood Inventory */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Droplet className="w-5 h-5 text-primary" />
                  Blood Type Inventory
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
                  {Object.entries(bloodInventory).map(([type, units]) => (
                    <BloodTypeCard
                      key={type}
                      type={type}
                      units={units}
                      isLow={units < 10}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Donations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Recent Donations
                  </CardTitle>
                  <Button variant="ghost" size="sm">View All</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Donor</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Blood Type</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {recentDonations.map((donation) => (
                        <tr key={donation.id} className="hover:bg-accent/50 transition-colors">
                          <td className="py-3 px-4">
                            <span className="font-medium text-foreground">{donation.donor}</span>
                          </td>
                          <td className="py-3 px-4">
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                              <Droplet className="w-3 h-3 fill-current" />
                              {donation.bloodType}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">{donation.date}</td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                              donation.status === "completed"
                                ? "bg-success/10 text-success"
                                : "bg-warning/10 text-warning"
                            }`}>
                              {donation.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
