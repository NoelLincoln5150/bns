import { SortOrder } from "../../util/SortOrder";

export type TicketOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  status?: SortOrder;
  subject?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  userRelation?: SortOrder;
};
