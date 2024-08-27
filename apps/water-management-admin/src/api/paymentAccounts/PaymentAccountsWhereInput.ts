import { B2bTransactionsListRelationFilter } from "../b2bTransactions/B2bTransactionsListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type PaymentAccountsWhereInput = {
  b2bTransactionsItems?: B2bTransactionsListRelationFilter;
  id?: StringFilter;
};
