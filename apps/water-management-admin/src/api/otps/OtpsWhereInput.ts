import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type OtpsWhereInput = {
  id?: StringFilter;
  identifier?: StringNullableFilter;
  token?: StringNullableFilter;
  valid?: BooleanNullableFilter;
  validity?: IntNullableFilter;
};
