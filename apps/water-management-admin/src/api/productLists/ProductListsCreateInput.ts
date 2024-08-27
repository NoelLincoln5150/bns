import { ProductsCreateNestedManyWithoutProductListsItemsInput } from "./ProductsCreateNestedManyWithoutProductListsItemsInput";

export type ProductListsCreateInput = {
  barcode?: string | null;
  deletedAt?: Date | null;
  inStock?: boolean | null;
  productid?: ProductsCreateNestedManyWithoutProductListsItemsInput;
};
