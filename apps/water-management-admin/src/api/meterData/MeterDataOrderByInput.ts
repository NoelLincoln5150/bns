import { SortOrder } from "../../util/SortOrder";

export type MeterDataOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  prepaidMeterId?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
