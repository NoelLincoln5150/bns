import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PrepaidMeterWhereUniqueInput } from "../prepaidMeter/PrepaidMeterWhereUniqueInput";

export type AlertWhereInput = {
  id?: StringFilter;
  level?: "Info" | "Warning" | "Urgent" | "Error" | "Critical";
  message?: StringNullableFilter;
  prepaidMeter?: PrepaidMeterWhereUniqueInput;
};
