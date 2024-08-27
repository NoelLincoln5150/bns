import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LogsListRelationFilter } from "../logs/LogsListRelationFilter";
import { MeterListRelationFilter } from "../meter/MeterListRelationFilter";
import { RoleListRelationFilter } from "../role/RoleListRelationFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  emailVerifiedAt?: DateTimeNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  logsItems?: LogsListRelationFilter;
  meters?: MeterListRelationFilter;
  name?: StringNullableFilter;
  rememberToken?: StringNullableFilter;
  role?: RoleListRelationFilter;
  tickets?: TicketListRelationFilter;
  username?: StringFilter;
};
