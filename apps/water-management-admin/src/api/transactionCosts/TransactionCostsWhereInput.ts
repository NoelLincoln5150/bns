import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TransactionCostsWhereInput = {
  fee?: DecimalNullableFilter;
  id?: StringFilter;
  max?: DecimalNullableFilter;
  min?: DecimalNullableFilter;
};
