import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CustomersWhereUniqueInput } from "../customers/CustomersWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PaymentAccountsWhereUniqueInput } from "../paymentAccounts/PaymentAccountsWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type B2bTransactionsWhereInput = {
  amount?: FloatNullableFilter;
  customer?: CustomersWhereUniqueInput;
  id?: StringFilter;
  paymentAccount?: PaymentAccountsWhereUniqueInput;
  status?: "Option1";
  transactionDate?: DateTimeNullableFilter;
};
