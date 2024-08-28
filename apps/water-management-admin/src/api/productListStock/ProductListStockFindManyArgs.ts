import { ProductListStockWhereInput } from "./ProductListStockWhereInput";
import { ProductListStockOrderByInput } from "./ProductListStockOrderByInput";

export type ProductListStockFindManyArgs = {
  where?: ProductListStockWhereInput;
  orderBy?: Array<ProductListStockOrderByInput>;
  skip?: number;
  take?: number;
};
