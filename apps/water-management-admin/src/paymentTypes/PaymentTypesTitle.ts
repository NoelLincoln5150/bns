import { PaymentTypes as TPaymentTypes } from "../api/paymentTypes/PaymentTypes";

export const PAYMENTTYPES_TITLE_FIELD = "id";

export const PaymentTypesTitle = (record: TPaymentTypes): string => {
  return record.id?.toString() || String(record.id);
};
