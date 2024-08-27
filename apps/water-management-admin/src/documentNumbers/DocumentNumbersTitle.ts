import { DocumentNumbers as TDocumentNumbers } from "../api/documentNumbers/DocumentNumbers";

export const DOCUMENTNUMBERS_TITLE_FIELD = "id";

export const DocumentNumbersTitle = (record: TDocumentNumbers): string => {
  return record.id?.toString() || String(record.id);
};
