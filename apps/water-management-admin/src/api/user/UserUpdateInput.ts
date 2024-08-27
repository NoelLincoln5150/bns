import { MeterUpdateManyWithoutUsersInput } from "./MeterUpdateManyWithoutUsersInput";
import { RoleUpdateManyWithoutUsersInput } from "./RoleUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TicketUpdateManyWithoutUsersInput } from "./TicketUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  meters?: MeterUpdateManyWithoutUsersInput;
  password?: string;
  role?: RoleUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  tickets?: TicketUpdateManyWithoutUsersInput;
  username?: string;
};
