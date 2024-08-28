import { SortOrder } from "../../util/SortOrder";

export type SuppliersOrderByInput = {
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  numberField?: SortOrder;
  taxNumber?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
