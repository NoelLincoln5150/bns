import { WaterSourcesWhereUniqueInput } from "../waterSources/WaterSourcesWhereUniqueInput";

export type PremisesWaterSourceCreateInput = {
  premisesId?: string | null;
  waterSourceId?: WaterSourcesWhereUniqueInput | null;
};
