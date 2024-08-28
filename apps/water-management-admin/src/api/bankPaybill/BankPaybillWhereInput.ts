import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BankPaybillWhereInput = {
  deletedAt?: StringNullableFilter;
  enabled?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  paybill?: StringNullableFilter;
};
