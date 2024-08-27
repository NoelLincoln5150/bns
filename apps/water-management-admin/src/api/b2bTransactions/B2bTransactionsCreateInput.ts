import { CustomersWhereUniqueInput } from "../customers/CustomersWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { PaymentAccountsWhereUniqueInput } from "../paymentAccounts/PaymentAccountsWhereUniqueInput";

export type B2bTransactionsCreateInput = {
  amount?: number | null;
  c2bTransactionId?: string | null;
  completed?: Date | null;
  confirmed?: Date | null;
  contractNumber?: string | null;
  conversationId?: string | null;
  customer?: CustomersWhereUniqueInput | null;
  deletedAt?: Date | null;
  initiated?: Date | null;
  initiatedPayload?: InputJsonValue;
  message?: string | null;
  payload?: InputJsonValue;
  paymentAccount?: PaymentAccountsWhereUniqueInput | null;
  paymentChannelId?: string | null;
  share?: number | null;
  status?: "Option1" | null;
  transactionDate?: Date | null;
  transactionFee?: number | null;
};
