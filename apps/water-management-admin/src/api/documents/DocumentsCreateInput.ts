import { DocumentPaymentsCreateNestedManyWithoutDocumentsItemsInput } from "./DocumentPaymentsCreateNestedManyWithoutDocumentsItemsInput";
import { DocumentTypesWhereUniqueInput } from "../documentTypes/DocumentTypesWhereUniqueInput";

export type DocumentsCreateInput = {
  deletedAt?: string | null;
  documentPaymentsItems?: DocumentPaymentsCreateNestedManyWithoutDocumentsItemsInput;
  documentType?: DocumentTypesWhereUniqueInput | null;
  documentableId?: string | null;
  documentableType?: string | null;
  numberField?: string | null;
  paid?: boolean | null;
};
