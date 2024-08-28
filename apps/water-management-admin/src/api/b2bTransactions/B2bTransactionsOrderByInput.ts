import { SortOrder } from "../../util/SortOrder";

export type B2bTransactionsOrderByInput = {
  amount?: SortOrder;
  c2bTransactionId?: SortOrder;
  completed?: SortOrder;
  confirmed?: SortOrder;
  contractNumber?: SortOrder;
  conversationId?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  deletedAt?: SortOrder;
  id?: SortOrder;
  initiated?: SortOrder;
  initiatedPayload?: SortOrder;
  message?: SortOrder;
  payload?: SortOrder;
  paymentAccountId?: SortOrder;
  paymentChannelId?: SortOrder;
  share?: SortOrder;
  status?: SortOrder;
  transactionDate?: SortOrder;
  transactionFee?: SortOrder;
  updatedAt?: SortOrder;
};
