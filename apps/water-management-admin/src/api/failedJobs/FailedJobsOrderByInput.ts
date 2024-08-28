import { SortOrder } from "../../util/SortOrder";

export type FailedJobsOrderByInput = {
  connection?: SortOrder;
  createdAt?: SortOrder;
  exception?: SortOrder;
  failedAt?: SortOrder;
  id?: SortOrder;
  payload?: SortOrder;
  queue?: SortOrder;
  updatedAt?: SortOrder;
  uuid?: SortOrder;
};
