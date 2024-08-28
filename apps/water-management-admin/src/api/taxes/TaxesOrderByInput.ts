import { SortOrder } from "../../util/SortOrder";

export type TaxesOrderByInput = {
  apply?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  fixed?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  rate?: SortOrder;
  updatedAt?: SortOrder;
};
