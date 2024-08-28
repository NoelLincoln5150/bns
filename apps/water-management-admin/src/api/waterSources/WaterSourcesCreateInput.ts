import { PremisesWaterSourceCreateNestedManyWithoutWaterSourcesItemsInput } from "./PremisesWaterSourceCreateNestedManyWithoutWaterSourcesItemsInput";

export type WaterSourcesCreateInput = {
  county?: string | null;
  deletedAt?: Date | null;
  elevation?: number | null;
  latitude?: number | null;
  localAddress?: string | null;
  longitude?: number | null;
  name?: string | null;
  numberField?: number | null;
  premisesWaterSources?: PremisesWaterSourceCreateNestedManyWithoutWaterSourcesItemsInput;
  region?: string | null;
  subCounty?: string | null;
  supplierNumber?: string | null;
  town?: string | null;
  typeField?: string | null;
};
