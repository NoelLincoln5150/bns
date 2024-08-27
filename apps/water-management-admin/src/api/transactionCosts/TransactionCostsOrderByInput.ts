import { SortOrder } from "../../util/SortOrder";

export type TransactionCostsOrderByInput = {
  createdAt?: SortOrder;
  fee?: SortOrder;
  id?: SortOrder;
  max?: SortOrder;
  min?: SortOrder;
  updatedAt?: SortOrder;
};
