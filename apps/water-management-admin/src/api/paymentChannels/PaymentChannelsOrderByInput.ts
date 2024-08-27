import { SortOrder } from "../../util/SortOrder";

export type PaymentChannelsOrderByInput = {
  accountNumber?: SortOrder;
  channel?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  enabled?: SortOrder;
  id?: SortOrder;
  payableId?: SortOrder;
  payableType?: SortOrder;
  paymentTypeId?: SortOrder;
  updatedAt?: SortOrder;
};
