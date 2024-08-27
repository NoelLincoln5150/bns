import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TicketWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  status?:
    | "Pending"
    | "InProgress"
    | "Resolved"
    | "Closed"
    | "Escalated"
    | "OnHold"
    | "Cancelled"
    | "Scheduled"
    | "AwaitingParts"
    | "UnderReview";
  subject?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  userRelation?: StringNullableFilter;
};
