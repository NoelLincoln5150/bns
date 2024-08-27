import { SortOrder } from "../../util/SortOrder";

export type RevenueSharesOrderByInput = {
  applyTransactionFee?: SortOrder;
  approved?: SortOrder;
  contractNumber?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  id?: SortOrder;
  isCharge?: SortOrder;
  numberField?: SortOrder;
  paymentChannelId?: SortOrder;
  share?: SortOrder;
  updatedAt?: SortOrder;
};
