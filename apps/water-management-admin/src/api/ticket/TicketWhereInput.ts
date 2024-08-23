import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TicketWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  status?: "Option1";
  subject?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  userRelation?: StringNullableFilter;
};
