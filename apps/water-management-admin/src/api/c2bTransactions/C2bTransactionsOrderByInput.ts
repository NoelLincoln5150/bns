import { SortOrder } from "../../util/SortOrder";

export type C2bTransactionsOrderByInput = {
  accepted?: SortOrder;
  accountNumber?: SortOrder;
  amount?: SortOrder;
  completed?: SortOrder;
  confirmed?: SortOrder;
  contractNumber?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  deletedAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  payload?: SortOrder;
  transId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
