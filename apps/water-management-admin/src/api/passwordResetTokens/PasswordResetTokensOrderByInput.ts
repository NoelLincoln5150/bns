import { SortOrder } from "../../util/SortOrder";

export type PasswordResetTokensOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  token?: SortOrder;
  updatedAt?: SortOrder;
};
