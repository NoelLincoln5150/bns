import { SortOrder } from "../../util/SortOrder";

export type PaymentAccountsOrderByInput = {
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  enabled?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
