import { CategoryProductUpdateManyWithoutProductsItemsInput } from "./CategoryProductUpdateManyWithoutProductsItemsInput";
import { ProductListsUpdateManyWithoutProductsItemsInput } from "./ProductListsUpdateManyWithoutProductsItemsInput";

export type ProductsUpdateInput = {
  barcode?: string | null;
  categoryProducts?: CategoryProductUpdateManyWithoutProductsItemsInput;
  deletedAt?: string | null;
  description?: string | null;
  isSerialized?: boolean | null;
  lowStockWarning?: string | null;
  minimumOrderQuantity?: number | null;
  name?: string | null;
  price?: number | null;
  productListsItems?: ProductListsUpdateManyWithoutProductsItemsInput;
  quantity?: number | null;
  stockTakePeriod?: string | null;
};
