import { Customers } from "../customers/Customers";
import { PaymentAccounts } from "../paymentAccounts/PaymentAccounts";

export type B2bTransactions = {
  amount: number | null;
  createdAt: Date;
  customer?: Customers | null;
  id: string;
  paymentAccount?: PaymentAccounts | null;
  status?: "Option1" | null;
  transactionDate: Date | null;
  updatedAt: Date;
};
