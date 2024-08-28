import { SortOrder } from "../../util/SortOrder";

export type IssueTicketOrderByInput = {
  appUserId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
