import { DashboardLayout } from "@/components/DashboardLayout";
import { agents } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Star, BarChart3, Users, Ticket } from "lucide-react";
import { KPICard } from "@/components/KPICard";

const adminKPIs = [
  { title: "Active Agents", value: 4, change: "1 away", changeType: "neutral" as const, icon: Users },
  { title: "Avg Resolution", value: "4.2h", change: "-12% vs last week", changeType: "positive" as const, icon: BarChart3 },
  { title: "Unassigned", value: 3, change: "2 critical", changeType: "negative" as const, icon: Ticket },
  { title: "Avg Rating", value: "4.6", change: "+0.2 this month", changeType: "positive" as const, icon: Star },
];

const statusDot: Record<string, string> = {
  online: "bg-success",
  away: "bg-warning",
  offline: "bg-muted-foreground",
};

export default function Admin() {
  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Admin Panel</h1>
          <p className="text-sm text-muted-foreground mt-1">Agent management & performance overview</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {adminKPIs.map((kpi, i) => (
            <motion.div key={kpi.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
              <KPICard {...kpi} />
            </motion.div>
          ))}
        </div>

        {/* Agents Table */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="glass-card rounded-xl">
          <div className="p-5 border-b border-border">
            <h2 className="text-sm font-semibold text-foreground">Agent Performance</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-5 text-xs font-medium text-muted-foreground uppercase tracking-wider">Agent</th>
                  <th className="text-left py-3 px-5 text-xs font-medium text-muted-foreground uppercase tracking-wider">Role</th>
                  <th className="text-left py-3 px-5 text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                  <th className="text-left py-3 px-5 text-xs font-medium text-muted-foreground uppercase tracking-wider">Open Tickets</th>
                  <th className="text-left py-3 px-5 text-xs font-medium text-muted-foreground uppercase tracking-wider">Resolved</th>
                  <th className="text-left py-3 px-5 text-xs font-medium text-muted-foreground uppercase tracking-wider">Rating</th>
                </tr>
              </thead>
              <tbody>
                {agents.map((agent) => (
                  <tr key={agent.email} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                          {agent.name.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{agent.name}</p>
                          <p className="text-xs text-muted-foreground">{agent.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-5 text-muted-foreground">{agent.role}</td>
                    <td className="py-3 px-5">
                      <div className="flex items-center gap-2">
                        <div className={cn("w-2 h-2 rounded-full", statusDot[agent.status])} />
                        <span className="text-sm capitalize text-muted-foreground">{agent.status}</span>
                      </div>
                    </td>
                    <td className="py-3 px-5 text-foreground font-medium">{agent.tickets}</td>
                    <td className="py-3 px-5 text-foreground">{agent.resolved}</td>
                    <td className="py-3 px-5">
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-warning fill-warning" />
                        <span className="text-foreground font-medium">{agent.rating}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
