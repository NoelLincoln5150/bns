import { Customers } from "../customers/Customers";
import { Meter } from "../meter/Meter";

export type CustomerMeter = {
  createdAt: Date;
  customer?: Customers | null;
  id: string;
  meterId?: Meter | null;
  updatedAt: Date;
};
