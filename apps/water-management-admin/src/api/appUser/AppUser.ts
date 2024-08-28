import { IssueTicket } from "../issueTicket/IssueTicket";
import { Payment } from "../payment/Payment";

export type AppUser = {
  createdAt: Date;
  email: string | null;
  id: string;
  issueTickets?: Array<IssueTicket>;
  name: string | null;
  payments?: Array<Payment>;
  updatedAt: Date;
};
