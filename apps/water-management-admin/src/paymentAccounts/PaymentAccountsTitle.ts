import { PaymentAccounts as TPaymentAccounts } from "../api/paymentAccounts/PaymentAccounts";

export const PAYMENTACCOUNTS_TITLE_FIELD = "id";

export const PaymentAccountsTitle = (record: TPaymentAccounts): string => {
  return record.id?.toString() || String(record.id);
};
