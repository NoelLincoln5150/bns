import { Alert } from "../alert/Alert";
import { Command } from "../command/Command";
import { MeterData } from "../meterData/MeterData";

export type PrepaidMeter = {
  alerts?: Array<Alert>;
  commands?: Array<Command>;
  createdAt: Date;
  id: string;
  meterDataItems?: Array<MeterData>;
  meterNumber: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
