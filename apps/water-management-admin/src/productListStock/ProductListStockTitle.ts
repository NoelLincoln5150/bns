import { ProductListStock as TProductListStock } from "../api/productListStock/ProductListStock";

export const PRODUCTLISTSTOCK_TITLE_FIELD = "id";

export const ProductListStockTitle = (record: TProductListStock): string => {
  return record.id?.toString() || String(record.id);
};
