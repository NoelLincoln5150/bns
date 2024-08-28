import { IssueTicketCreateNestedManyWithoutAppUsersInput } from "./IssueTicketCreateNestedManyWithoutAppUsersInput";
import { PaymentCreateNestedManyWithoutAppUsersInput } from "./PaymentCreateNestedManyWithoutAppUsersInput";

export type AppUserCreateInput = {
  email?: string | null;
  issueTickets?: IssueTicketCreateNestedManyWithoutAppUsersInput;
  name?: string | null;
  payments?: PaymentCreateNestedManyWithoutAppUsersInput;
};
