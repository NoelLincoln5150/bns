import { SortOrder } from "../../util/SortOrder";

export type ProductsOrderByInput = {
  barcode?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  isSerialized?: SortOrder;
  lowStockWarning?: SortOrder;
  minimumOrderQuantity?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
  stockTakePeriod?: SortOrder;
  updatedAt?: SortOrder;
};
