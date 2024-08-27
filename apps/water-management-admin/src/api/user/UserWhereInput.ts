import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MeterListRelationFilter } from "../meter/MeterListRelationFilter";
import { RoleListRelationFilter } from "../role/RoleListRelationFilter";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  meters?: MeterListRelationFilter;
  role?: RoleListRelationFilter;
  tickets?: TicketListRelationFilter;
  username?: StringFilter;
};
