import { DocumentPayments as TDocumentPayments } from "../api/documentPayments/DocumentPayments";

export const DOCUMENTPAYMENTS_TITLE_FIELD = "id";

export const DocumentPaymentsTitle = (record: TDocumentPayments): string => {
  return record.id?.toString() || String(record.id);
};
