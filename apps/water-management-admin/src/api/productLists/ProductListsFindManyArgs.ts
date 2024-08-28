import { ProductListsWhereInput } from "./ProductListsWhereInput";
import { ProductListsOrderByInput } from "./ProductListsOrderByInput";

export type ProductListsFindManyArgs = {
  where?: ProductListsWhereInput;
  orderBy?: Array<ProductListsOrderByInput>;
  skip?: number;
  take?: number;
};
