import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PrepaidMeterWhereUniqueInput } from "../prepaidMeter/PrepaidMeterWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CommandWhereInput = {
  commandType?: "Open" | "Close" | "Reset";
  id?: StringFilter;
  parameter?: StringNullableFilter;
  prepaidMeter?: PrepaidMeterWhereUniqueInput;
  sentAt?: DateTimeNullableFilter;
};
