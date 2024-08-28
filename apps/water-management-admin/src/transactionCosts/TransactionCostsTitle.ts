import { TransactionCosts as TTransactionCosts } from "../api/transactionCosts/TransactionCosts";

export const TRANSACTIONCOSTS_TITLE_FIELD = "id";

export const TransactionCostsTitle = (record: TTransactionCosts): string => {
  return record.id?.toString() || String(record.id);
};
