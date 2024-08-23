import { MeterWhereUniqueInput } from "../meter/MeterWhereUniqueInput";

export type UsageUpdateInput = {
  amountUsed?: number | null;
  meter?: MeterWhereUniqueInput | null;
  meterRelation?: string | null;
  usageDate?: Date | null;
};
