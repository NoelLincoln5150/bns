import { PrepaidMeterWhereUniqueInput } from "../prepaidMeter/PrepaidMeterWhereUniqueInput";

export type AlertCreateInput = {
  level?: "Info" | "Warning" | "Urgent" | "Error" | "Critical" | null;
  message?: string | null;
  prepaidMeter?: PrepaidMeterWhereUniqueInput | null;
};
