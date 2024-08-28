import { TransactionCostsWhereInput } from "./TransactionCostsWhereInput";
import { TransactionCostsOrderByInput } from "./TransactionCostsOrderByInput";

export type TransactionCostsFindManyArgs = {
  where?: TransactionCostsWhereInput;
  orderBy?: Array<TransactionCostsOrderByInput>;
  skip?: number;
  take?: number;
};
