import { SortOrder } from "../../util/SortOrder";

export type CustomersOrderByInput = {
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  email?: SortOrder;
  hash?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
