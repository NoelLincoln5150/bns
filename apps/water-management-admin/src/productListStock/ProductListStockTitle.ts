import { ProductListStock as TProductListStock } from "../api/productListStock/ProductListStock";

export const PRODUCTLISTSTOCK_TITLE_FIELD = "productListId";

export const ProductListStockTitle = (record: TProductListStock): string => {
  return record.productListId?.toString() || String(record.id);
};
