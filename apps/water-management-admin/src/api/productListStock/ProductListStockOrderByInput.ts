import { SortOrder } from "../../util/SortOrder";

export type ProductListStockOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  productListId?: SortOrder;
  stockId?: SortOrder;
  updatedAt?: SortOrder;
};
