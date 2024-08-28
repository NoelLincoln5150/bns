import { PremisesWaterSourceUpdateManyWithoutWaterSourcesItemsInput } from "./PremisesWaterSourceUpdateManyWithoutWaterSourcesItemsInput";

export type WaterSourcesUpdateInput = {
  county?: string | null;
  deletedAt?: Date | null;
  elevation?: number | null;
  latitude?: number | null;
  localAddress?: string | null;
  longitude?: number | null;
  name?: string | null;
  numberField?: number | null;
  premisesWaterSources?: PremisesWaterSourceUpdateManyWithoutWaterSourcesItemsInput;
  region?: string | null;
  subCounty?: string | null;
  supplierNumber?: string | null;
  town?: string | null;
  typeField?: string | null;
};
