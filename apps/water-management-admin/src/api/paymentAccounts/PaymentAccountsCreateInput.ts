import { B2bTransactionsCreateNestedManyWithoutPaymentAccountsItemsInput } from "./B2bTransactionsCreateNestedManyWithoutPaymentAccountsItemsInput";

export type PaymentAccountsCreateInput = {
  b2bTransactionsItems?: B2bTransactionsCreateNestedManyWithoutPaymentAccountsItemsInput;
  deletedAt?: Date | null;
  enabled?: boolean | null;
};
