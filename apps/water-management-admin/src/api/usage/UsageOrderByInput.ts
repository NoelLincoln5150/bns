import { SortOrder } from "../../util/SortOrder";

export type UsageOrderByInput = {
  amountUsed?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  meterId?: SortOrder;
  meterRelation?: SortOrder;
  updatedAt?: SortOrder;
  usageDate?: SortOrder;
};
