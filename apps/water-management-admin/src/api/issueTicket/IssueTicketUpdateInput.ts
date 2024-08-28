import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";

export type IssueTicketUpdateInput = {
  appUser?: AppUserWhereUniqueInput | null;
  description?: string | null;
  status?: "Option1" | null;
};
