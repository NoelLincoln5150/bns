import { Documents as TDocuments } from "../api/documents/Documents";

export const DOCUMENTS_TITLE_FIELD = "deletedAt";

export const DocumentsTitle = (record: TDocuments): string => {
  return record.deletedAt?.toString() || String(record.id);
};
