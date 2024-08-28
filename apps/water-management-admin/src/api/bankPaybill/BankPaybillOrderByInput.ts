import { SortOrder } from "../../util/SortOrder";

export type BankPaybillOrderByInput = {
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  enabled?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  paybill?: SortOrder;
  updatedAt?: SortOrder;
};
