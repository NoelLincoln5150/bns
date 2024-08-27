import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CustomersWhereUniqueInput } from "../customers/CustomersWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { PaymentAccountsWhereUniqueInput } from "../paymentAccounts/PaymentAccountsWhereUniqueInput";

export type B2bTransactionsWhereInput = {
  amount?: FloatNullableFilter;
  c2bTransactionId?: StringNullableFilter;
  completed?: DateTimeNullableFilter;
  confirmed?: DateTimeNullableFilter;
  contractNumber?: StringNullableFilter;
  conversationId?: StringNullableFilter;
  customer?: CustomersWhereUniqueInput;
  deletedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  initiated?: DateTimeNullableFilter;
  initiatedPayload?: JsonFilter;
  message?: StringNullableFilter;
  payload?: JsonFilter;
  paymentAccount?: PaymentAccountsWhereUniqueInput;
  paymentChannelId?: StringNullableFilter;
  share?: FloatNullableFilter;
  status?: "Option1";
  transactionDate?: DateTimeNullableFilter;
  transactionFee?: FloatNullableFilter;
};
