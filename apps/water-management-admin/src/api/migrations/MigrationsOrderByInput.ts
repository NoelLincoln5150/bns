import { SortOrder } from "../../util/SortOrder";

export type MigrationsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
