import { JsonValue } from "type-fest";
import { Usage } from "../usage/Usage";
import { User } from "../user/User";

export type Meter = {
  coordinates: JsonValue;
  createdAt: Date;
  id: string;
  installationDate: Date | null;
  status?:
    | "Active"
    | "Inactive"
    | "Suspended"
    | "Maintenance"
    | "Faulty"
    | "Closed"
    | "Pending"
    | "Disconnected"
    | null;
  tokenBalance: number | null;
  updatedAt: Date;
  usages?: Usage | null;
  user?: User | null;
};
