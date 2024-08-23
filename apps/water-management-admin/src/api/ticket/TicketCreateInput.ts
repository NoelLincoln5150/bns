import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TicketCreateInput = {
  message?: string | null;
  status?: "Option1" | null;
  subject?: string | null;
  user?: UserWhereUniqueInput | null;
  userRelation?: string | null;
};
