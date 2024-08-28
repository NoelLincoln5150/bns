import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ShortCodesWhereInput = {
  consumerKey?: StringNullableFilter;
  consumerSecret?: StringNullableFilter;
  deletedAt?: DateTimeNullableFilter;
  displayName?: StringNullableFilter;
  enabled?: BooleanNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  registered?: DateTimeNullableFilter;
  shortcode?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
