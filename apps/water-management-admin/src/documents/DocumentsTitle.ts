import { Documents as TDocuments } from "../api/documents/Documents";

export const DOCUMENTS_TITLE_FIELD = "id";

export const DocumentsTitle = (record: TDocuments): string => {
  return record.id?.toString() || String(record.id);
};
