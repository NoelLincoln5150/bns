import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IssueTicketListRelationFilter } from "../issueTicket/IssueTicketListRelationFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type AppUserWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  issueTickets?: IssueTicketListRelationFilter;
  name?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
};
