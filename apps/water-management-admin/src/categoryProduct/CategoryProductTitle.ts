import { CategoryProduct as TCategoryProduct } from "../api/categoryProduct/CategoryProduct";

export const CATEGORYPRODUCT_TITLE_FIELD = "categoryId";

export const CategoryProductTitle = (record: TCategoryProduct): string => {
  return record.categoryId?.toString() || String(record.id);
};
