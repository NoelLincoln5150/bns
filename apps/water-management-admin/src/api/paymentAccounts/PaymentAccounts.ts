import { B2bTransactions } from "../b2bTransactions/B2bTransactions";

export type PaymentAccounts = {
  b2bTransactionsItems?: Array<B2bTransactions>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
