import { C2bTransactions as TC2bTransactions } from "../api/c2bTransactions/C2bTransactions";

export const C2BTRANSACTIONS_TITLE_FIELD = "accountNumber";

export const C2bTransactionsTitle = (record: TC2bTransactions): string => {
  return record.accountNumber?.toString() || String(record.id);
};
