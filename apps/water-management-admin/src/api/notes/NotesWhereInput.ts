import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type NotesWhereInput = {
  body?: StringNullableFilter;
  deletedAt?: StringNullableFilter;
  id?: StringFilter;
  mutable?: BooleanNullableFilter;
  notableId?: StringNullableFilter;
  notableType?: StringNullableFilter;
  title?: StringNullableFilter;
};
