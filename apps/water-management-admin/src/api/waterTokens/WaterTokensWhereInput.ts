import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type WaterTokensWhereInput = {
  c2bTransactionId?: StringNullableFilter;
  charges?: FloatNullableFilter;
  deletedAt?: DateTimeNullableFilter;
  expired?: DateTimeNullableFilter;
  id?: StringFilter;
  liters?: FloatNullableFilter;
  tokenAmount?: FloatNullableFilter;
  tokenRequests?: JsonFilter;
};
