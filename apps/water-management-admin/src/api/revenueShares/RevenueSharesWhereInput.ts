import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type RevenueSharesWhereInput = {
  applyTransactionFee?: BooleanNullableFilter;
  approved?: BooleanNullableFilter;
  contractNumber?: StringNullableFilter;
  deletedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  isCharge?: BooleanNullableFilter;
  numberField?: IntNullableFilter;
  paymentChannelId?: StringNullableFilter;
  share?: FloatNullableFilter;
};
