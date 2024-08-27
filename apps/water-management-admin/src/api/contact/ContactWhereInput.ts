import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ContactWhereInput = {
  active?: StringNullableFilter;
  contactableId?: StringNullableFilter;
  contactableType?: StringNullableFilter;
  deletedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  info?: StringNullableFilter;
  name?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
