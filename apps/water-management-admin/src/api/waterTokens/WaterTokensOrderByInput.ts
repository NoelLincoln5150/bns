import { SortOrder } from "../../util/SortOrder";

export type WaterTokensOrderByInput = {
  c2bTransactionId?: SortOrder;
  charges?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  expired?: SortOrder;
  id?: SortOrder;
  liters?: SortOrder;
  tokenAmount?: SortOrder;
  tokenRequests?: SortOrder;
  updatedAt?: SortOrder;
};
