import { DocumentTypes as TDocumentTypes } from "../api/documentTypes/DocumentTypes";

export const DOCUMENTTYPES_TITLE_FIELD = "id";

export const DocumentTypesTitle = (record: TDocumentTypes): string => {
  return record.id?.toString() || String(record.id);
};
