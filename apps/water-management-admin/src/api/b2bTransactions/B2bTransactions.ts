import { Customers } from "../customers/Customers";
import { JsonValue } from "type-fest";
import { PaymentAccounts } from "../paymentAccounts/PaymentAccounts";

export type B2bTransactions = {
  amount: number | null;
  c2bTransactionId: string | null;
  completed: Date | null;
  confirmed: Date | null;
  contractNumber: string | null;
  conversationId: string | null;
  createdAt: Date;
  customer?: Customers | null;
  deletedAt: Date | null;
  id: string;
  initiated: Date | null;
  initiatedPayload: JsonValue;
  message: string | null;
  payload: JsonValue;
  paymentAccount?: PaymentAccounts | null;
  paymentChannelId: string | null;
  share: number | null;
  status?: "Option1" | null;
  transactionDate: Date | null;
  transactionFee: number | null;
  updatedAt: Date;
};
