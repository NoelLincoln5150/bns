import { WaterSourcesWhereUniqueInput } from "../waterSources/WaterSourcesWhereUniqueInput";

export type PremisesWaterSourceUpdateInput = {
  premisesId?: string | null;
  waterSourceId?: WaterSourcesWhereUniqueInput | null;
};
