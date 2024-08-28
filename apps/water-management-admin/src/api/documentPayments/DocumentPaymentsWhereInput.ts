import { DocumentsWhereUniqueInput } from "../documents/DocumentsWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PaymentTypesListRelationFilter } from "../paymentTypes/PaymentTypesListRelationFilter";

export type DocumentPaymentsWhereInput = {
  document?: DocumentsWhereUniqueInput;
  id?: StringFilter;
  paymentType?: PaymentTypesListRelationFilter;
};
