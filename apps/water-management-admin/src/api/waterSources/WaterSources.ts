import { PremisesWaterSource } from "../premisesWaterSource/PremisesWaterSource";

export type WaterSources = {
  county: string | null;
  createdAt: Date;
  deletedAt: Date | null;
  elevation: number | null;
  id: string;
  latitude: number | null;
  localAddress: string | null;
  longitude: number | null;
  name: string | null;
  numberField: number | null;
  premisesWaterSources?: Array<PremisesWaterSource>;
  region: string | null;
  subCounty: string | null;
  supplierNumber: string | null;
  town: string | null;
  typeField: string | null;
  updatedAt: Date;
};
