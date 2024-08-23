import { PrepaidMeterWhereUniqueInput } from "../prepaidMeter/PrepaidMeterWhereUniqueInput";

export type MeterDataCreateInput = {
  prepaidMeter?: PrepaidMeterWhereUniqueInput | null;
  timestamp?: Date | null;
  value?: number | null;
};
