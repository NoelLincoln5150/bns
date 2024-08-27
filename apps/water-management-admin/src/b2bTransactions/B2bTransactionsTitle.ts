import { B2bTransactions as TB2bTransactions } from "../api/b2bTransactions/B2bTransactions";

export const B2BTRANSACTIONS_TITLE_FIELD = "c2bTransactionId";

export const B2bTransactionsTitle = (record: TB2bTransactions): string => {
  return record.c2bTransactionId?.toString() || String(record.id);
};
