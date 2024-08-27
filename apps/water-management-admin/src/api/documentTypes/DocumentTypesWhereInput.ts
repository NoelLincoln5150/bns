import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DocumentsListRelationFilter } from "../documents/DocumentsListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type DocumentTypesWhereInput = {
  code?: StringNullableFilter;
  deletedAt?: DateTimeNullableFilter;
  documentsItems?: DocumentsListRelationFilter;
  id?: StringFilter;
  movement?: StringNullableFilter;
  name?: StringNullableFilter;
  requirePayment?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
