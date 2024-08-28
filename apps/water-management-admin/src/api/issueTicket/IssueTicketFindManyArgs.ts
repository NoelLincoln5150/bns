import { IssueTicketWhereInput } from "./IssueTicketWhereInput";
import { IssueTicketOrderByInput } from "./IssueTicketOrderByInput";

export type IssueTicketFindManyArgs = {
  where?: IssueTicketWhereInput;
  orderBy?: Array<IssueTicketOrderByInput>;
  skip?: number;
  take?: number;
};
