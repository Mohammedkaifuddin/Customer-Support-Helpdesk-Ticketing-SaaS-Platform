import { cn } from "@/lib/utils";

type StatusType = "open" | "in_progress" | "resolved" | "closed" | "overdue";
type PriorityType = "critical" | "high" | "medium" | "low";

const statusStyles: Record<StatusType, string> = {
  open: "bg-primary/15 text-primary border-primary/20",
  in_progress: "bg-warning/15 text-warning border-warning/20",
  resolved: "bg-success/15 text-success border-success/20",
  closed: "bg-muted text-muted-foreground border-border",
  overdue: "bg-destructive/15 text-destructive border-destructive/20",
};

const statusLabels: Record<StatusType, string> = {
  open: "Open",
  in_progress: "In Progress",
  resolved: "Resolved",
  closed: "Closed",
  overdue: "Overdue",
};

const priorityStyles: Record<PriorityType, string> = {
  critical: "bg-destructive/15 text-destructive border-destructive/20",
  high: "bg-warning/15 text-warning border-warning/20",
  medium: "bg-primary/15 text-primary border-primary/20",
  low: "bg-muted text-muted-foreground border-border",
};

export function StatusBadge({ status }: { status: StatusType }) {
  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border", statusStyles[status])}>
      {statusLabels[status]}
    </span>
  );
}

export function PriorityBadge({ priority }: { priority: PriorityType }) {
  return (
    <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border capitalize", priorityStyles[priority])}>
      {priority}
    </span>
  );
}
