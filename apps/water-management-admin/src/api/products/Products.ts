import { CategoryProduct } from "../categoryProduct/CategoryProduct";
import { ProductLists } from "../productLists/ProductLists";

export type Products = {
  barcode: string | null;
  categoryProducts?: Array<CategoryProduct>;
  createdAt: Date;
  deletedAt: string | null;
  description: string | null;
  id: string;
  isSerialized: boolean | null;
  lowStockWarning: string | null;
  minimumOrderQuantity: number | null;
  name: string | null;
  price: number | null;
  productListsItems?: Array<ProductLists>;
  quantity: number | null;
  stockTakePeriod: string | null;
  updatedAt: Date;
};
