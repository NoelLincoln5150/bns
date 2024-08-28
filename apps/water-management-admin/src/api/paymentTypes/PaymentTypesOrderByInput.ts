import { SortOrder } from "../../util/SortOrder";

export type PaymentTypesOrderByInput = {
  canSettle?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  displayName?: SortOrder;
  enabled?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
