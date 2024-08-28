import { Products } from "../products/Products";

export type CategoryProduct = {
  categoryId: string | null;
  createdAt: Date;
  id: string;
  productI?: Products | null;
  updatedAt: Date;
};
