import { SortOrder } from "../../util/SortOrder";

export type CommandOrderByInput = {
  commandType?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  parameter?: SortOrder;
  prepaidMeterId?: SortOrder;
  sentAt?: SortOrder;
  updatedAt?: SortOrder;
};
