import { SortOrder } from "../../util/SortOrder";

export type ProductListsOrderByInput = {
  barcode?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  id?: SortOrder;
  inStock?: SortOrder;
  updatedAt?: SortOrder;
};
