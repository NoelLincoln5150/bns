import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LogsWhereInput = {
  action?: StringNullableFilter;
  deletedAt?: StringNullableFilter;
  id?: StringFilter;
  ipAddress?: DecimalNullableFilter;
  message?: StringNullableFilter;
  requestPayload?: StringNullableFilter;
  resourceId?: StringNullableFilter;
  resourceModel?: StringNullableFilter;
  updateValues?: DateTimeNullableFilter;
  userId?: UserWhereUniqueInput;
};
