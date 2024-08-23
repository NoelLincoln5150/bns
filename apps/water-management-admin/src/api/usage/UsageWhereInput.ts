import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MeterWhereUniqueInput } from "../meter/MeterWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type UsageWhereInput = {
  amountUsed?: FloatNullableFilter;
  id?: StringFilter;
  meter?: MeterWhereUniqueInput;
  meterRelation?: StringNullableFilter;
  usageDate?: DateTimeNullableFilter;
};
