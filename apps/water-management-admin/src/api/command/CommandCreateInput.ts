import { PrepaidMeterWhereUniqueInput } from "../prepaidMeter/PrepaidMeterWhereUniqueInput";

export type CommandCreateInput = {
  commandType?: "Open" | "Close" | "Reset" | null;
  parameter?: string | null;
  prepaidMeter?: PrepaidMeterWhereUniqueInput | null;
  sentAt?: Date | null;
};
