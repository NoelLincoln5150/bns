import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type TaxablesWhereInput = {
  apply?: StringNullableFilter;
  id?: StringFilter;
  included?: BooleanNullableFilter;
  rate?: FloatNullableFilter;
  taxId?: StringNullableFilter;
  taxableId?: StringNullableFilter;
  taxableType?: StringNullableFilter;
};
