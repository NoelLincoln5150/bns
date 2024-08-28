import { LogsUpdateManyWithoutUsersInput } from "./LogsUpdateManyWithoutUsersInput";
import { MeterUpdateManyWithoutUsersInput } from "./MeterUpdateManyWithoutUsersInput";
import { RoleUpdateManyWithoutUsersInput } from "./RoleUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TicketUpdateManyWithoutUsersInput } from "./TicketUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  emailVerifiedAt?: Date | null;
  firstName?: string | null;
  lastName?: string | null;
  logsItems?: LogsUpdateManyWithoutUsersInput;
  meters?: MeterUpdateManyWithoutUsersInput;
  name?: string | null;
  password?: string;
  rememberToken?: string | null;
  role?: RoleUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  tickets?: TicketUpdateManyWithoutUsersInput;
  username?: string;
};
