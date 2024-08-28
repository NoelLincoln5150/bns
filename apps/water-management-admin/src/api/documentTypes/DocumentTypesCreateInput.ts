import { DocumentsCreateNestedManyWithoutDocumentTypesItemsInput } from "./DocumentsCreateNestedManyWithoutDocumentTypesItemsInput";

export type DocumentTypesCreateInput = {
  code?: string | null;
  deletedAt?: Date | null;
  documentsItems?: DocumentsCreateNestedManyWithoutDocumentTypesItemsInput;
  movement?: string | null;
  name?: string | null;
  requirePayment?: string | null;
  typeField?: string | null;
};
