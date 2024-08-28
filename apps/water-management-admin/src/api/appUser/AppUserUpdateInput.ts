import { IssueTicketUpdateManyWithoutAppUsersInput } from "./IssueTicketUpdateManyWithoutAppUsersInput";
import { PaymentUpdateManyWithoutAppUsersInput } from "./PaymentUpdateManyWithoutAppUsersInput";

export type AppUserUpdateInput = {
  email?: string | null;
  issueTickets?: IssueTicketUpdateManyWithoutAppUsersInput;
  name?: string | null;
  payments?: PaymentUpdateManyWithoutAppUsersInput;
};
