import { SortOrder } from "../../util/SortOrder";

export type DocumentTypesOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  id?: SortOrder;
  movement?: SortOrder;
  name?: SortOrder;
  requirePayment?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
