import { ContractListRelationFilter } from "../contract/ContractListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type SuppliersWhereInput = {
  contracts?: ContractListRelationFilter;
  deletedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  numberField?: IntNullableFilter;
  taxNumber?: StringNullableFilter;
  typeField?: StringNullableFilter;
};
