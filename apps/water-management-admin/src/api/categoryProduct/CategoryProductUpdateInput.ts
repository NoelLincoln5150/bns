import { ProductsWhereUniqueInput } from "../products/ProductsWhereUniqueInput";

export type CategoryProductUpdateInput = {
  categoryId?: string | null;
  productI?: ProductsWhereUniqueInput | null;
};
