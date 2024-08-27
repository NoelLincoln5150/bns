import { SortOrder } from "../../util/SortOrder";

export type B2bTransactionsOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  paymentAccountId?: SortOrder;
  status?: SortOrder;
  transactionDate?: SortOrder;
  updatedAt?: SortOrder;
};
