import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PrepaidMeterWhereUniqueInput } from "../prepaidMeter/PrepaidMeterWhereUniqueInput";

export type AlertWhereInput = {
  id?: StringFilter;
  level?: "Option1";
  message?: StringNullableFilter;
  prepaidMeter?: PrepaidMeterWhereUniqueInput;
};
