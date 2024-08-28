import { ProductsWhereUniqueInput } from "../products/ProductsWhereUniqueInput";

export type CategoryProductCreateInput = {
  categoryId?: string | null;
  productI?: ProductsWhereUniqueInput | null;
};
