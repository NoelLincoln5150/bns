import { B2bTransactions as TB2bTransactions } from "../api/b2bTransactions/B2bTransactions";

export const B2BTRANSACTIONS_TITLE_FIELD = "id";

export const B2bTransactionsTitle = (record: TB2bTransactions): string => {
  return record.id?.toString() || String(record.id);
};
