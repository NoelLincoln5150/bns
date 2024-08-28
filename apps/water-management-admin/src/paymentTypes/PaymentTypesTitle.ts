import { PaymentTypes as TPaymentTypes } from "../api/paymentTypes/PaymentTypes";

export const PAYMENTTYPES_TITLE_FIELD = "displayName";

export const PaymentTypesTitle = (record: TPaymentTypes): string => {
  return record.displayName?.toString() || String(record.id);
};
