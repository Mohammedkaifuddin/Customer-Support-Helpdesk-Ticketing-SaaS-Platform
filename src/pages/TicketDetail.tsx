import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { StatusBadge, PriorityBadge } from "@/components/StatusBadge";
import { tickets } from "@/data/mockData";
import { ArrowLeft, Send, Clock, Tag, User, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function TicketDetail() {
  const { id } = useParams();
  const ticket = tickets.find((t) => t.id === id);
  const [reply, setReply] = useState("");

  if (!ticket) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-full p-8">
          <p className="text-muted-foreground">Ticket not found.</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-6 lg:p-8 space-y-6">
        {/* Back + Title */}
        <div className="flex items-center gap-3">
          <Link to="/tickets" className="p-2 rounded-lg hover:bg-muted transition-colors">
            <ArrowLeft className="w-4 h-4 text-muted-foreground" />
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-primary">{ticket.id}</span>
              <PriorityBadge priority={ticket.priority} />
              <StatusBadge status={ticket.status} />
            </div>
            <h1 className="text-xl font-bold text-foreground mt-1">{ticket.subject}</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Conversation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:col-span-2 glass-card rounded-xl flex flex-col"
          >
            <div className="p-5 border-b border-border">
              <h2 className="text-sm font-semibold text-foreground">Conversation</h2>
            </div>
            <div className="flex-1 p-5 space-y-4 max-h-[500px] overflow-y-auto">
              {ticket.messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={cn(
                    "flex gap-3",
                    msg.role === "agent" && "flex-row-reverse"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold",
                    msg.role === "customer" ? "bg-primary/10 text-primary" : "bg-success/10 text-success"
                  )}>
                    {msg.sender.charAt(0)}
                  </div>
                  <div className={cn(
                    "max-w-[75%] rounded-xl p-4 text-sm",
                    msg.role === "customer" ? "bg-muted text-foreground" : "bg-primary/10 text-foreground"
                  )}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-semibold text-xs">{msg.sender}</span>
                      <span className="text-xs text-muted-foreground">{msg.time}</span>
                    </div>
                    <p className="leading-relaxed">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Reply */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <input
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  placeholder="Type your reply..."
                  className="flex-1 px-4 py-2.5 rounded-lg bg-muted border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                />
                <button className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:brightness-110 transition-all flex items-center gap-2">
                  <Send className="w-4 h-4" /> Send
                </button>
              </div>
            </div>
          </motion.div>

          {/* Metadata Panel */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-xl p-5 space-y-5 h-fit"
          >
            <h2 className="text-sm font-semibold text-foreground">Ticket Details</h2>

            <div className="space-y-4">
              {[
                { icon: User, label: "Customer", value: ticket.customer },
                { icon: Tag, label: "Category", value: ticket.category },
                { icon: Shield, label: "Assigned Agent", value: ticket.assignedAgent },
                { icon: Clock, label: "SLA", value: ticket.sla },
                { icon: Clock, label: "Created", value: ticket.createdDate },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <item.icon className="w-4 h-4 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
