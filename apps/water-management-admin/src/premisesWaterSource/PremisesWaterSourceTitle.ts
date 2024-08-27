import { PremisesWaterSource as TPremisesWaterSource } from "../api/premisesWaterSource/PremisesWaterSource";

export const PREMISESWATERSOURCE_TITLE_FIELD = "id";

export const PremisesWaterSourceTitle = (
  record: TPremisesWaterSource
): string => {
  return record.id?.toString() || String(record.id);
};
