import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type IssueTicketWhereInput = {
  appUser?: AppUserWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  status?: "Option1";
};
