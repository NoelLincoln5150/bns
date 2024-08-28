import { SortOrder } from "../../util/SortOrder";

export type PasswordResetsOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  token?: SortOrder;
  updatedAt?: SortOrder;
};
