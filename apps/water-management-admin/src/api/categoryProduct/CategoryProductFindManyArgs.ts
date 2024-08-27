import { CategoryProductWhereInput } from "./CategoryProductWhereInput";
import { CategoryProductOrderByInput } from "./CategoryProductOrderByInput";

export type CategoryProductFindManyArgs = {
  where?: CategoryProductWhereInput;
  orderBy?: Array<CategoryProductOrderByInput>;
  skip?: number;
  take?: number;
};
