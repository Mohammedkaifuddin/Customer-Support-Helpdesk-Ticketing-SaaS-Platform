import { DashboardLayout } from "@/components/DashboardLayout";
import { KPICard } from "@/components/KPICard";
import { StatusBadge, PriorityBadge } from "@/components/StatusBadge";
import { tickets } from "@/data/mockData";
import { Ticket, AlertCircle, Clock, CheckCircle2, AlertTriangle, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const kpis = [
  { title: "Total Tickets", value: 1284, change: "+12% from last month", changeType: "positive" as const, icon: Ticket, iconColor: "bg-primary/10" },
  { title: "Open", value: 42, change: "5 new today", changeType: "neutral" as const, icon: AlertCircle, iconColor: "bg-primary/10" },
  { title: "In Progress", value: 38, change: "+8% this week", changeType: "neutral" as const, icon: Clock, iconColor: "bg-warning/10" },
  { title: "Resolved", value: 1156, change: "+18% from last month", changeType: "positive" as const, icon: CheckCircle2, iconColor: "bg-success/10" },
  { title: "Overdue", value: 12, change: "-3 from yesterday", changeType: "positive" as const, icon: AlertTriangle, iconColor: "bg-destructive/10" },
];

export default function Dashboard() {
  const recentTickets = tickets.slice(0, 5);

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-sm text-muted-foreground mt-1">Welcome back — here's what's happening today.</p>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-success" />
            <span className="text-sm text-success font-medium">94.2% SLA compliance</span>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <KPICard {...kpi} />
            </motion.div>
          ))}
        </div>

        {/* Recent Tickets */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card rounded-xl"
        >
          <div className="flex items-center justify-between p-5 border-b border-border">
            <h2 className="text-sm font-semibold text-foreground">Recent Tickets</h2>
            <Link to="/tickets" className="text-xs text-primary hover:underline font-medium">View all</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-5 text-xs font-medium text-muted-foreground uppercase tracking-wider">ID</th>
                  <th className="text-left py-3 px-5 text-xs font-medium text-muted-foreground uppercase tracking-wider">Subject</th>
                  <th className="text-left py-3 px-5 text-xs font-medium text-muted-foreground uppercase tracking-wider">Priority</th>
                  <th className="text-left py-3 px-5 text-xs font-medium text-muted-foreground uppercase tracking-wider">Status</th>
                  <th className="text-left py-3 px-5 text-xs font-medium text-muted-foreground uppercase tracking-wider">Agent</th>
                  <th className="text-left py-3 px-5 text-xs font-medium text-muted-foreground uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentTickets.map((ticket) => (
                  <tr key={ticket.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-5">
                      <Link to={`/tickets/${ticket.id}`} className="text-primary font-mono text-xs hover:underline">{ticket.id}</Link>
                    </td>
                    <td className="py-3 px-5 text-foreground font-medium max-w-[250px] truncate">{ticket.subject}</td>
                    <td className="py-3 px-5"><PriorityBadge priority={ticket.priority} /></td>
                    <td className="py-3 px-5"><StatusBadge status={ticket.status} /></td>
                    <td className="py-3 px-5 text-muted-foreground">{ticket.assignedAgent}</td>
                    <td className="py-3 px-5 text-muted-foreground text-xs">{ticket.createdDate}</td>
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
