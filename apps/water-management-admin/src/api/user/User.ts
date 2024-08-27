import { Meter } from "../meter/Meter";
import { Role } from "../role/Role";
import { JsonValue } from "type-fest";
import { Ticket } from "../ticket/Ticket";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  meters?: Array<Meter>;
  role?: Array<Role>;
  roles: JsonValue;
  tickets?: Array<Ticket>;
  updatedAt: Date;
  username: string;
};
