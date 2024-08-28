import { Meter } from "../meter/Meter";

export type Usage = {
  amountUsed: number | null;
  createdAt: Date;
  id: string;
  meter?: Meter | null;
  meterRelation: string | null;
  updatedAt: Date;
  usageDate: Date | null;
};
