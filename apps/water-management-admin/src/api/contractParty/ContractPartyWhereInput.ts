import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ContractPartyWhereInput = {
  deletedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  numberField?: StringNullableFilter;
  taxNumber?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
