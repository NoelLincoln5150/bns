import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PasswordResetTokensWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  token?: StringNullableFilter;
};
