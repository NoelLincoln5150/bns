import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";

export type IssueTicketCreateInput = {
  appUser?: AppUserWhereUniqueInput | null;
  description?: string | null;
  status?: "Option1" | null;
};
