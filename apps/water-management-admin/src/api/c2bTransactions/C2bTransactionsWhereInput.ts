import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type C2bTransactionsWhereInput = {
  accepted?: BooleanNullableFilter;
  accountNumber?: StringNullableFilter;
  amount?: FloatNullableFilter;
  completed?: BooleanNullableFilter;
  confirmed?: BooleanNullableFilter;
  contractNumber?: StringNullableFilter;
  customerId?: IntNullableFilter;
  deletedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  message?: StringNullableFilter;
  payload?: JsonFilter;
  transId?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
