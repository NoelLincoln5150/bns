import { SortOrder } from "../../util/SortOrder";

export type AlertOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  level?: SortOrder;
  message?: SortOrder;
  prepaidMeterId?: SortOrder;
  updatedAt?: SortOrder;
};
