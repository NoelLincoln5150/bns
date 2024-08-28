import { DocumentNumbers as TDocumentNumbers } from "../api/documentNumbers/DocumentNumbers";

export const DOCUMENTNUMBERS_TITLE_FIELD = "name";

export const DocumentNumbersTitle = (record: TDocumentNumbers): string => {
  return record.name?.toString() || String(record.id);
};
