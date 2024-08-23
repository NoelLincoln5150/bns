import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MeterListRelationFilter } from "../meter/MeterListRelationFilter";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  meters?: MeterListRelationFilter;
  role?: RoleWhereUniqueInput;
  tickets?: TicketListRelationFilter;
  userRole?: StringNullableFilter;
  username?: StringFilter;
};
