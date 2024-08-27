import { SortOrder } from "../../util/SortOrder";

export type MeterOrderByInput = {
  coordinates?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  installationDate?: SortOrder;
  meterTypeId?: SortOrder;
  status?: SortOrder;
  tokenBalance?: SortOrder;
  updatedAt?: SortOrder;
  usagesId?: SortOrder;
  userId?: SortOrder;
};
