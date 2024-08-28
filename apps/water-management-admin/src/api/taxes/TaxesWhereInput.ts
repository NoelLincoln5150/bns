import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TaxesWhereInput = {
  apply?: StringNullableFilter;
  deletedAt?: DateTimeNullableFilter;
  fixed?: FloatNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  rate?: FloatNullableFilter;
};
