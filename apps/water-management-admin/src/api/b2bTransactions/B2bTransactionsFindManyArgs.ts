import { B2bTransactionsWhereInput } from "./B2bTransactionsWhereInput";
import { B2bTransactionsOrderByInput } from "./B2bTransactionsOrderByInput";

export type B2bTransactionsFindManyArgs = {
  where?: B2bTransactionsWhereInput;
  orderBy?: Array<B2bTransactionsOrderByInput>;
  skip?: number;
  take?: number;
};
