import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CategoryWhereInput = {
  deletedAt?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
