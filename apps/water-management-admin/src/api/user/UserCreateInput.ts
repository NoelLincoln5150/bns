import { MeterCreateNestedManyWithoutUsersInput } from "./MeterCreateNestedManyWithoutUsersInput";
import { RoleCreateNestedManyWithoutUsersInput } from "./RoleCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TicketCreateNestedManyWithoutUsersInput } from "./TicketCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  emailVerifiedAt?: Date | null;
  firstName?: string | null;
  lastName?: string | null;
  meters?: MeterCreateNestedManyWithoutUsersInput;
  name?: string | null;
  password: string;
  rememberToken?: string | null;
  role?: RoleCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  tickets?: TicketCreateNestedManyWithoutUsersInput;
  username: string;
};
