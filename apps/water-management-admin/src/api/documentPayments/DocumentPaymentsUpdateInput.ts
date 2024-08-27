import { DocumentsWhereUniqueInput } from "../documents/DocumentsWhereUniqueInput";
import { PaymentTypesUpdateManyWithoutDocumentPaymentsItemsInput } from "./PaymentTypesUpdateManyWithoutDocumentPaymentsItemsInput";

export type DocumentPaymentsUpdateInput = {
  document?: DocumentsWhereUniqueInput | null;
  paymentType?: PaymentTypesUpdateManyWithoutDocumentPaymentsItemsInput;
};
