import { MeterCreateNestedManyWithoutUsersInput } from "./MeterCreateNestedManyWithoutUsersInput";
import { RoleCreateNestedManyWithoutUsersInput } from "./RoleCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TicketCreateNestedManyWithoutUsersInput } from "./TicketCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  meters?: MeterCreateNestedManyWithoutUsersInput;
  password: string;
  role?: RoleCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  tickets?: TicketCreateNestedManyWithoutUsersInput;
  username: string;
};
