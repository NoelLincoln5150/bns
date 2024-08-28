import { C2bTransactionsWhereInput } from "./C2bTransactionsWhereInput";
import { C2bTransactionsOrderByInput } from "./C2bTransactionsOrderByInput";

export type C2bTransactionsFindManyArgs = {
  where?: C2bTransactionsWhereInput;
  orderBy?: Array<C2bTransactionsOrderByInput>;
  skip?: number;
  take?: number;
};
