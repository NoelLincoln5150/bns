import { AppUser } from "../appUser/AppUser";

export type IssueTicket = {
  appUser?: AppUser | null;
  createdAt: Date;
  description: string | null;
  id: string;
  status?: "Option1" | null;
  updatedAt: Date;
};
