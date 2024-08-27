import { SortOrder } from "../../util/SortOrder";

export type LogsOrderByInput = {
  action?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  id?: SortOrder;
  ipAddress?: SortOrder;
  message?: SortOrder;
  requestPayload?: SortOrder;
  resourceId?: SortOrder;
  resourceModel?: SortOrder;
  updateValues?: SortOrder;
  updatedAt?: SortOrder;
  userIdId?: SortOrder;
};
