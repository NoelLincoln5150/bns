import { WaterSources } from "../waterSources/WaterSources";

export type PremisesWaterSource = {
  createdAt: Date;
  id: string;
  premisesId: string | null;
  updatedAt: Date;
  waterSourceId?: WaterSources | null;
};
