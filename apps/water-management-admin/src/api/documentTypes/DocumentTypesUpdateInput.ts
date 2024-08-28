import { DocumentsUpdateManyWithoutDocumentTypesItemsInput } from "./DocumentsUpdateManyWithoutDocumentTypesItemsInput";

export type DocumentTypesUpdateInput = {
  code?: string | null;
  deletedAt?: Date | null;
  documentsItems?: DocumentsUpdateManyWithoutDocumentTypesItemsInput;
  movement?: string | null;
  name?: string | null;
  requirePayment?: string | null;
  typeField?: string | null;
};
