import { MeterCreateNestedManyWithoutUsersInput } from "./MeterCreateNestedManyWithoutUsersInput";
import { RoleWhereUniqueInput } from "../role/RoleWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TicketCreateNestedManyWithoutUsersInput } from "./TicketCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  meters?: MeterCreateNestedManyWithoutUsersInput;
  password: string;
  role?: RoleWhereUniqueInput | null;
  roles: InputJsonValue;
  tickets?: TicketCreateNestedManyWithoutUsersInput;
  userRole?: string | null;
  username: string;
};
