import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ProductsListRelationFilter } from "../products/ProductsListRelationFilter";

export type ProductListsWhereInput = {
  barcode?: StringNullableFilter;
  deletedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  inStock?: BooleanNullableFilter;
  productid?: ProductsListRelationFilter;
};
