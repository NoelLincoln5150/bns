import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductsWhereUniqueInput } from "../products/ProductsWhereUniqueInput";

export type CategoryProductWhereInput = {
  categoryId?: StringNullableFilter;
  id?: StringFilter;
  productI?: ProductsWhereUniqueInput;
};
