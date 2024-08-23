import { SortOrder } from "../../util/SortOrder";

export type MeterOrderByInput = {
  coordinates?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  installationDate?: SortOrder;
  status?: SortOrder;
  tokenBalance?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
