import { SortOrder } from "../../util/SortOrder";

export type DocumentNumbersOrderByInput = {
  code?: SortOrder;
  count?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  year?: SortOrder;
};
