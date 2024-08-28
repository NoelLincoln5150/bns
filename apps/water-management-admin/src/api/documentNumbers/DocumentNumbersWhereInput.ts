import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type DocumentNumbersWhereInput = {
  code?: StringNullableFilter;
  count?: StringNullableFilter;
  deletedAt?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  year?: DateTimeNullableFilter;
};
