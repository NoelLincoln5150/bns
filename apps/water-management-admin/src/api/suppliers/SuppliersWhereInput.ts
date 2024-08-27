import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type SuppliersWhereInput = {
  deletedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  numberField?: IntNullableFilter;
  taxNumber?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
