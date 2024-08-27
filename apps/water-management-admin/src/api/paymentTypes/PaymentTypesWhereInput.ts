import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DocumentPaymentsListRelationFilter } from "../documentPayments/DocumentPaymentsListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentChannelsListRelationFilter } from "../paymentChannels/PaymentChannelsListRelationFilter";

export type PaymentTypesWhereInput = {
  canSettle?: StringNullableFilter;
  deletedAt?: StringNullableFilter;
  displayName?: StringNullableFilter;
  documentPaymentsItems?: DocumentPaymentsListRelationFilter;
  enabled?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  paymentChannelsItems?: PaymentChannelsListRelationFilter;
};
