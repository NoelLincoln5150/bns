import { AlertUpdateManyWithoutPrepaidMetersInput } from "./AlertUpdateManyWithoutPrepaidMetersInput";
import { CommandUpdateManyWithoutPrepaidMetersInput } from "./CommandUpdateManyWithoutPrepaidMetersInput";
import { MeterDataUpdateManyWithoutPrepaidMetersInput } from "./MeterDataUpdateManyWithoutPrepaidMetersInput";

export type PrepaidMeterUpdateInput = {
  alerts?: AlertUpdateManyWithoutPrepaidMetersInput;
  commands?: CommandUpdateManyWithoutPrepaidMetersInput;
  meterDataItems?: MeterDataUpdateManyWithoutPrepaidMetersInput;
  meterNumber?: string | null;
  status?: "Active" | "Inactive" | "Suspended" | "Closed" | null;
};
