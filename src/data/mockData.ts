export interface TicketData {
  id: string;
  subject: string;
  priority: "critical" | "high" | "medium" | "low";
  status: "open" | "in_progress" | "resolved" | "closed" | "overdue";
  assignedAgent: string;
  customer: string;
  customerEmail: string;
  category: string;
  createdDate: string;
  sla: string;
  messages: { sender: string; role: "customer" | "agent"; text: string; time: string }[];
}

export const tickets: TicketData[] = [
  {
    id: "TKT-1024", subject: "Unable to access billing portal", priority: "critical", status: "open",
    assignedAgent: "Sarah Chen", customer: "Acme Corp", customerEmail: "john@acme.com",
    category: "Billing", createdDate: "2026-02-14", sla: "2h",
    messages: [
      { sender: "John Miller", role: "customer", text: "Hi, I'm unable to access the billing portal. It shows a 403 error when I try to log in. This is urgent as we need to update our payment method before the renewal date.", time: "10:30 AM" },
      { sender: "Sarah Chen", role: "agent", text: "Hi John, I'm looking into this now. Can you confirm which email you're using to log in? I'll check the access permissions on your account.", time: "10:45 AM" },
      { sender: "John Miller", role: "customer", text: "I'm using john@acme.com. This was working fine yesterday.", time: "10:52 AM" },
    ],
  },
  {
    id: "TKT-1023", subject: "Feature request: Export to CSV", priority: "low", status: "in_progress",
    assignedAgent: "Marcus Johnson", customer: "TechStart Inc", customerEmail: "lisa@techstart.io",
    category: "Feature Request", createdDate: "2026-02-13", sla: "48h",
    messages: [
      { sender: "Lisa Park", role: "customer", text: "We'd love to be able to export our analytics data to CSV format. Is this something on the roadmap?", time: "3:15 PM" },
      { sender: "Marcus Johnson", role: "agent", text: "Great suggestion, Lisa! I've added this to our feature request tracker. Our product team reviews these weekly.", time: "4:00 PM" },
    ],
  },
  {
    id: "TKT-1022", subject: "SSO integration not working", priority: "high", status: "overdue",
    assignedAgent: "Emily Rodriguez", customer: "Global Finance Ltd", customerEmail: "raj@globalfin.com",
    category: "Integration", createdDate: "2026-02-11", sla: "4h",
    messages: [
      { sender: "Raj Patel", role: "customer", text: "Our SSO integration stopped working after the latest update. None of our team can sign in via SAML.", time: "9:00 AM" },
    ],
  },
  {
    id: "TKT-1021", subject: "Dashboard loading slowly", priority: "medium", status: "in_progress",
    assignedAgent: "Sarah Chen", customer: "MediaPro Agency", customerEmail: "anna@mediapro.com",
    category: "Performance", createdDate: "2026-02-12", sla: "8h",
    messages: [
      { sender: "Anna Wright", role: "customer", text: "The dashboard has been taking 15+ seconds to load for the past few days. It was instant before.", time: "11:00 AM" },
      { sender: "Sarah Chen", role: "agent", text: "We've identified a query optimization issue. Our engineering team is deploying a fix today.", time: "2:30 PM" },
    ],
  },
  {
    id: "TKT-1020", subject: "Account deletion request", priority: "medium", status: "resolved",
    assignedAgent: "Marcus Johnson", customer: "SmallBiz Co", customerEmail: "mike@smallbiz.co",
    category: "Account", createdDate: "2026-02-10", sla: "24h",
    messages: [
      { sender: "Mike Torres", role: "customer", text: "Please delete our account and all associated data as per GDPR requirements.", time: "1:00 PM" },
      { sender: "Marcus Johnson", role: "agent", text: "Your account has been scheduled for deletion. All data will be purged within 30 days per our data retention policy. You'll receive a confirmation email.", time: "3:00 PM" },
    ],
  },
  {
    id: "TKT-1019", subject: "API rate limit exceeded", priority: "high", status: "open",
    assignedAgent: "Emily Rodriguez", customer: "DataFlow Systems", customerEmail: "dev@dataflow.io",
    category: "API", createdDate: "2026-02-14", sla: "4h",
    messages: [
      { sender: "DevOps Team", role: "customer", text: "We're hitting rate limits on the /v2/analytics endpoint. We need the limit increased for our enterprise plan.", time: "8:00 AM" },
    ],
  },
  {
    id: "TKT-1018", subject: "Mobile app crash on iOS 19", priority: "critical", status: "in_progress",
    assignedAgent: "Sarah Chen", customer: "RetailMax", customerEmail: "support@retailmax.com",
    category: "Bug", createdDate: "2026-02-13", sla: "2h",
    messages: [
      { sender: "Support Team", role: "customer", text: "Our users are reporting consistent crashes on iOS 19 when opening the notifications tab.", time: "7:30 AM" },
      { sender: "Sarah Chen", role: "agent", text: "We've reproduced the issue. It's related to a deprecated API in iOS 19. Hotfix is being tested now.", time: "9:15 AM" },
    ],
  },
  {
    id: "TKT-1017", subject: "Invoice discrepancy for January", priority: "high", status: "resolved",
    assignedAgent: "Marcus Johnson", customer: "CloudNine Tech", customerEmail: "billing@cloudnine.dev",
    category: "Billing", createdDate: "2026-02-09", sla: "8h",
    messages: [
      { sender: "Finance Dept", role: "customer", text: "Our January invoice shows charges for 50 seats but we only have 35 active users.", time: "10:00 AM" },
      { sender: "Marcus Johnson", role: "agent", text: "You're right, there was a billing error. I've issued a credit for the difference and corrected your account. The updated invoice is attached.", time: "1:30 PM" },
    ],
  },
];

export const agents = [
  { name: "Sarah Chen", email: "sarah@helpdesk.com", role: "Senior Agent", tickets: 12, resolved: 89, rating: 4.8, status: "online" as const },
  { name: "Marcus Johnson", email: "marcus@helpdesk.com", role: "Agent", tickets: 8, resolved: 67, rating: 4.6, status: "online" as const },
  { name: "Emily Rodriguez", email: "emily@helpdesk.com", role: "Agent", tickets: 10, resolved: 74, rating: 4.7, status: "away" as const },
  { name: "David Kim", email: "david@helpdesk.com", role: "Junior Agent", tickets: 5, resolved: 32, rating: 4.4, status: "offline" as const },
];
