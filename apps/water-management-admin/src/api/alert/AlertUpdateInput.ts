import { PrepaidMeterWhereUniqueInput } from "../prepaidMeter/PrepaidMeterWhereUniqueInput";

export type AlertUpdateInput = {
  level?: "Option1" | null;
  message?: string | null;
  prepaidMeter?: PrepaidMeterWhereUniqueInput | null;
};
