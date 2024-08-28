import { SortOrder } from "../../util/SortOrder";

export type StocksOrderByInput = {
  count?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  documentId?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  productId?: SortOrder;
  quantity?: SortOrder;
  updatedAt?: SortOrder;
};
