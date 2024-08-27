import { User } from "../user/User";

export type Ticket = {
  createdAt: Date;
  id: string;
  message: string | null;
  status?:
    | "Pending"
    | "InProgress"
    | "Resolved"
    | "Closed"
    | "Escalated"
    | "OnHold"
    | "Cancelled"
    | "Scheduled"
    | "AwaitingParts"
    | "UnderReview"
    | null;
  subject: string | null;
  updatedAt: Date;
  user?: User | null;
  userRelation: string | null;
};
