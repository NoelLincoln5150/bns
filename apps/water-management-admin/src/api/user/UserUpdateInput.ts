import { MeterUpdateManyWithoutUsersInput } from "./MeterUpdateManyWithoutUsersInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TicketUpdateManyWithoutUsersInput } from "./TicketUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  meters?: MeterUpdateManyWithoutUsersInput;
  password?: string;
  role?: RoleWhereUniqueInput | null;
  roles?: InputJsonValue;
  tickets?: TicketUpdateManyWithoutUsersInput;
  userRole?: string | null;
  username?: string;
};
