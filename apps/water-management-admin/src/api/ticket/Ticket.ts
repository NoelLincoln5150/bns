import { User } from "../user/User";

export type Ticket = {
  createdAt: Date;
  id: string;
  message: string | null;
  status?: "Option1" | null;
  subject: string | null;
  updatedAt: Date;
  user?: User | null;
  userRelation: string | null;
};
