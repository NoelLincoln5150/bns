import { B2bTransactions } from "../b2bTransactions/B2bTransactions";

export type PaymentAccounts = {
  b2bTransactionsItems?: Array<B2bTransactions>;
  createdAt: Date;
  deletedAt: Date | null;
  enabled: boolean | null;
  id: string;
  updatedAt: Date;
};
