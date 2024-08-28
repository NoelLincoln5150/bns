import { BankPaybillWhereInput } from "./BankPaybillWhereInput";
import { BankPaybillOrderByInput } from "./BankPaybillOrderByInput";

export type BankPaybillFindManyArgs = {
  where?: BankPaybillWhereInput;
  orderBy?: Array<BankPaybillOrderByInput>;
  skip?: number;
  take?: number;
};
