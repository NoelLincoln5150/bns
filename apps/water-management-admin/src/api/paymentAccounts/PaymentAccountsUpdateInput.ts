import { B2bTransactionsUpdateManyWithoutPaymentAccountsItemsInput } from "./B2bTransactionsUpdateManyWithoutPaymentAccountsItemsInput";

export type PaymentAccountsUpdateInput = {
  b2bTransactionsItems?: B2bTransactionsUpdateManyWithoutPaymentAccountsItemsInput;
  deletedAt?: Date | null;
  enabled?: boolean | null;
};
