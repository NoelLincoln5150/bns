import { B2bTransactionsListRelationFilter } from "../b2bTransactions/B2bTransactionsListRelationFilter";
import { CustomerMeterListRelationFilter } from "../customerMeter/CustomerMeterListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomersWhereInput = {
  b2bTransactionsItems?: B2bTransactionsListRelationFilter;
  customerMeters?: CustomerMeterListRelationFilter;
  deletedAt?: StringNullableFilter;
  email?: StringNullableFilter;
  hash?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
};
