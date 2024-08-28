import { PrepaidMeter } from "../prepaidMeter/PrepaidMeter";

export type MeterData = {
  createdAt: Date;
  id: string;
  prepaidMeter?: PrepaidMeter | null;
  timestamp: Date | null;
  updatedAt: Date;
  value: number | null;
};
