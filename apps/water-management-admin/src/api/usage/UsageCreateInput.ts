import { MeterWhereUniqueInput } from "../meter/MeterWhereUniqueInput";

export type UsageCreateInput = {
  amountUsed?: number | null;
  meter?: MeterWhereUniqueInput | null;
  meterRelation?: string | null;
  usageDate?: Date | null;
};
