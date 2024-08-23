import { PrepaidMeterWhereUniqueInput } from "../prepaidMeter/PrepaidMeterWhereUniqueInput";

export type MeterDataUpdateInput = {
  prepaidMeter?: PrepaidMeterWhereUniqueInput | null;
  timestamp?: Date | null;
  value?: number | null;
};
