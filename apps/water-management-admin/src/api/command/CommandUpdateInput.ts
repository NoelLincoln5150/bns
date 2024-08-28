import { PrepaidMeterWhereUniqueInput } from "../prepaidMeter/PrepaidMeterWhereUniqueInput";

export type CommandUpdateInput = {
  commandType?: "Open" | "Close" | "Reset" | null;
  parameter?: string | null;
  prepaidMeter?: PrepaidMeterWhereUniqueInput | null;
  sentAt?: Date | null;
};
