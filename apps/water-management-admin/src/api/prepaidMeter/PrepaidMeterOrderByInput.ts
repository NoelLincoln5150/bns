import { SortOrder } from "../../util/SortOrder";

export type PrepaidMeterOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  meterNumber?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
