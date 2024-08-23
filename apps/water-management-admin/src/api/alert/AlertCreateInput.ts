import { PrepaidMeterWhereUniqueInput } from "../prepaidMeter/PrepaidMeterWhereUniqueInput";

export type AlertCreateInput = {
  level?: "Option1" | null;
  message?: string | null;
  prepaidMeter?: PrepaidMeterWhereUniqueInput | null;
};
