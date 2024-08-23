import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UsageListRelationFilter } from "../usage/UsageListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MeterWhereInput = {
  coordinates?: JsonFilter;
  id?: StringFilter;
  installationDate?: DateTimeNullableFilter;
  status?: "Option1";
  tokenBalance?: IntNullableFilter;
  usages?: UsageListRelationFilter;
  user?: UserWhereUniqueInput;
};
