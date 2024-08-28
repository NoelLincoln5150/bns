import { ProductsUpdateManyWithoutProductListsItemsInput } from "./ProductsUpdateManyWithoutProductListsItemsInput";

export type ProductListsUpdateInput = {
  barcode?: string | null;
  deletedAt?: Date | null;
  inStock?: boolean | null;
  productid?: ProductsUpdateManyWithoutProductListsItemsInput;
};
