import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PersonalAccessTokensWhereInput = {
  abilities?: StringNullableFilter;
  expiresAt?: StringNullableFilter;
  id?: StringFilter;
  lastUsedAt?: StringNullableFilter;
  name?: StringNullableFilter;
  token?: StringNullableFilter;
  tokenableId?: StringNullableFilter;
  tokenableType?: StringNullableFilter;
};
