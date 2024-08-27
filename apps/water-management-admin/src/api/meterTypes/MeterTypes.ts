import { Meter } from "../meter/Meter";

export type MeterTypes = {
  createdAt: Date;
  id: string;
  meters?: Array<Meter>;
  updatedAt: Date;
};
