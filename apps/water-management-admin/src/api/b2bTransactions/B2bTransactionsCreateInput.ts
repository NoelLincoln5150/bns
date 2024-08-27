import { CustomersWhereUniqueInput } from "../customers/CustomersWhereUniqueInput";
import { PaymentAccountsWhereUniqueInput } from "../paymentAccounts/PaymentAccountsWhereUniqueInput";

export type B2bTransactionsCreateInput = {
  amount?: number | null;
  customer?: CustomersWhereUniqueInput | null;
  paymentAccount?: PaymentAccountsWhereUniqueInput | null;
  status?: "Option1" | null;
  transactionDate?: Date | null;
};
