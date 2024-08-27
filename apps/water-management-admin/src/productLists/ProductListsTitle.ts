import { ProductLists as TProductLists } from "../api/productLists/ProductLists";

export const PRODUCTLISTS_TITLE_FIELD = "id";

export const ProductListsTitle = (record: TProductLists): string => {
  return record.id?.toString() || String(record.id);
};
