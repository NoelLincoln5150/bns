import { DocumentsWhereUniqueInput } from "../documents/DocumentsWhereUniqueInput";
import { PaymentTypesCreateNestedManyWithoutDocumentPaymentsItemsInput } from "./PaymentTypesCreateNestedManyWithoutDocumentPaymentsItemsInput";

export type DocumentPaymentsCreateInput = {
  document?: DocumentsWhereUniqueInput | null;
  paymentType?: PaymentTypesCreateNestedManyWithoutDocumentPaymentsItemsInput;
};
