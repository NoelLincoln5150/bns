import { B2bTransactionsListRelationFilter } from "../b2bTransactions/B2bTransactionsListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PaymentAccountsWhereInput = {
  b2bTransactionsItems?: B2bTransactionsListRelationFilter;
  deletedAt?: DateTimeNullableFilter;
  enabled?: BooleanNullableFilter;
  id?: StringFilter;
};
