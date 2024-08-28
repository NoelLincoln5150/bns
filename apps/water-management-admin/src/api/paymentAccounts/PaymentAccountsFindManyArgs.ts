import { PaymentAccountsWhereInput } from "./PaymentAccountsWhereInput";
import { PaymentAccountsOrderByInput } from "./PaymentAccountsOrderByInput";

export type PaymentAccountsFindManyArgs = {
  where?: PaymentAccountsWhereInput;
  orderBy?: Array<PaymentAccountsOrderByInput>;
  skip?: number;
  take?: number;
};
