import { JsonValue } from "type-fest";
import { CustomerMeter } from "../customerMeter/CustomerMeter";
import { MeterTypes } from "../meterTypes/MeterTypes";
import { Usage } from "../usage/Usage";
import { User } from "../user/User";

export type Meter = {
  coordinates: JsonValue;
  createdAt: Date;
  customerMeters?: Array<CustomerMeter>;
  id: string;
  installationDate: Date | null;
  meterType?: MeterTypes | null;
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
