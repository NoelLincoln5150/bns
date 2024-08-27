import { DocumentTypes as TDocumentTypes } from "../api/documentTypes/DocumentTypes";

export const DOCUMENTTYPES_TITLE_FIELD = "name";

export const DocumentTypesTitle = (record: TDocumentTypes): string => {
  return record.name?.toString() || String(record.id);
};
