import { DocumentPayments } from "../documentPayments/DocumentPayments";
import { DocumentTypes } from "../documentTypes/DocumentTypes";

export type Documents = {
  createdAt: Date;
  deletedAt: string | null;
  documentPaymentsItems?: Array<DocumentPayments>;
  documentType?: DocumentTypes | null;
  documentableId: string | null;
  documentableType: string | null;
  id: string;
  numberField: string | null;
  paid: boolean | null;
  updatedAt: Date;
};
