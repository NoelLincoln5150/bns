import { AlertCreateNestedManyWithoutPrepaidMetersInput } from "./AlertCreateNestedManyWithoutPrepaidMetersInput";
import { CommandCreateNestedManyWithoutPrepaidMetersInput } from "./CommandCreateNestedManyWithoutPrepaidMetersInput";
import { MeterDataCreateNestedManyWithoutPrepaidMetersInput } from "./MeterDataCreateNestedManyWithoutPrepaidMetersInput";

export type PrepaidMeterCreateInput = {
  alerts?: AlertCreateNestedManyWithoutPrepaidMetersInput;
  commands?: CommandCreateNestedManyWithoutPrepaidMetersInput;
  meterDataItems?: MeterDataCreateNestedManyWithoutPrepaidMetersInput;
  meterNumber?: string | null;
  status?: "Option1" | null;
};
