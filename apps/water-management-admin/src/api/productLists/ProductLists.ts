import { Products } from "../products/Products";

export type ProductLists = {
  barcode: string | null;
  createdAt: Date;
  deletedAt: Date | null;
  id: string;
  inStock: boolean | null;
  productid?: Array<Products>;
  updatedAt: Date;
};
