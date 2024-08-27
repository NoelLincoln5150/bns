import { CategoryProductCreateNestedManyWithoutProductsItemsInput } from "./CategoryProductCreateNestedManyWithoutProductsItemsInput";
import { ProductListsCreateNestedManyWithoutProductsItemsInput } from "./ProductListsCreateNestedManyWithoutProductsItemsInput";

export type ProductsCreateInput = {
  barcode?: string | null;
  categoryProducts?: CategoryProductCreateNestedManyWithoutProductsItemsInput;
  deletedAt?: string | null;
  description?: string | null;
  isSerialized?: boolean | null;
  lowStockWarning?: string | null;
  minimumOrderQuantity?: number | null;
  name?: string | null;
  price?: number | null;
  productListsItems?: ProductListsCreateNestedManyWithoutProductsItemsInput;
  quantity?: number | null;
  stockTakePeriod?: string | null;
};
