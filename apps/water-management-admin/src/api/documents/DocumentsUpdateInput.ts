import { DocumentPaymentsUpdateManyWithoutDocumentsItemsInput } from "./DocumentPaymentsUpdateManyWithoutDocumentsItemsInput";
import { DocumentTypesWhereUniqueInput } from "../documentTypes/DocumentTypesWhereUniqueInput";

export type DocumentsUpdateInput = {
  deletedAt?: string | null;
  documentPaymentsItems?: DocumentPaymentsUpdateManyWithoutDocumentsItemsInput;
  documentType?: DocumentTypesWhereUniqueInput | null;
  documentableId?: string | null;
  documentableType?: string | null;
  numberField?: string | null;
  paid?: boolean | null;
};
