import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type StocksWhereInput = {
  count?: IntNullableFilter;
  deletedAt?: DateTimeNullableFilter;
  documentId?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  productId?: StringNullableFilter;
  quantity?: IntNullableFilter;
};
