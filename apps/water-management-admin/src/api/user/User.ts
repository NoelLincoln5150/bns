import { Meter } from "../meter/Meter";
import { Role } from "../role/Role";
import { JsonValue } from "type-fest";
import { Ticket } from "../ticket/Ticket";

export type User = {
  createdAt: Date;
  email: string | null;
  emailVerifiedAt: Date | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  meters?: Array<Meter>;
  name: string | null;
  rememberToken: string | null;
  role?: Array<Role>;
  roles: JsonValue;
  tickets?: Array<Ticket>;
  updatedAt: Date;
  username: string;
};
