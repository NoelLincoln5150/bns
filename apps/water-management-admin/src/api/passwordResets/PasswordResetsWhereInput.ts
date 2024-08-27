import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PasswordResetsWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  token?: StringNullableFilter;
};
