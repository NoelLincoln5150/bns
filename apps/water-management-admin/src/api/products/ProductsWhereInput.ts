import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CategoryProductListRelationFilter } from "../categoryProduct/CategoryProductListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProductListsListRelationFilter } from "../productLists/ProductListsListRelationFilter";

export type ProductsWhereInput = {
  barcode?: StringNullableFilter;
  categoryProducts?: CategoryProductListRelationFilter;
  deletedAt?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  isSerialized?: BooleanNullableFilter;
  lowStockWarning?: StringNullableFilter;
  minimumOrderQuantity?: IntNullableFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  productListsItems?: ProductListsListRelationFilter;
  quantity?: IntNullableFilter;
  stockTakePeriod?: StringNullableFilter;
};
