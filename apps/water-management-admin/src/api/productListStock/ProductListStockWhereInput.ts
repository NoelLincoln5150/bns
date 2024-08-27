import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProductListStockWhereInput = {
  id?: StringFilter;
  productListId?: StringNullableFilter;
  stockId?: StringNullableFilter;
};
