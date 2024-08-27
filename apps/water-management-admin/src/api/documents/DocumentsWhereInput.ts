import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DocumentPaymentsListRelationFilter } from "../documentPayments/DocumentPaymentsListRelationFilter";
import { DocumentTypesWhereUniqueInput } from "../documentTypes/DocumentTypesWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type DocumentsWhereInput = {
  deletedAt?: StringNullableFilter;
  documentPaymentsItems?: DocumentPaymentsListRelationFilter;
  documentType?: DocumentTypesWhereUniqueInput;
  documentableId?: StringNullableFilter;
  documentableType?: StringNullableFilter;
  id?: StringFilter;
  numberField?: StringNullableFilter;
  paid?: BooleanNullableFilter;
};
