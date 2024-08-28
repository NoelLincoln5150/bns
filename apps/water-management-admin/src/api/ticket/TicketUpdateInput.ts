import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TicketUpdateInput = {
  message?: string | null;
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
  subject?: string | null;
  user?: UserWhereUniqueInput | null;
  userRelation?: string | null;
};
