import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentTypesWhereUniqueInput } from "../paymentTypes/PaymentTypesWhereUniqueInput";

export type PaymentChannelsWhereInput = {
  accountNumber?: DecimalNullableFilter;
  channel?: StringNullableFilter;
  deletedAt?: StringNullableFilter;
  enabled?: StringNullableFilter;
  id?: StringFilter;
  payableId?: StringNullableFilter;
  payableType?: StringNullableFilter;
  paymentType?: PaymentTypesWhereUniqueInput;
};
