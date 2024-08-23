import { PrepaidMeterWhereUniqueInput } from "../prepaidMeter/PrepaidMeterWhereUniqueInput";

export type CommandCreateInput = {
  commandType?: "Option1" | null;
  parameter?: string | null;
  prepaidMeter?: PrepaidMeterWhereUniqueInput | null;
  sentAt?: Date | null;
};
