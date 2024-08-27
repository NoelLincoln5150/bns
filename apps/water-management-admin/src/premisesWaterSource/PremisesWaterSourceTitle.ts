import { PremisesWaterSource as TPremisesWaterSource } from "../api/premisesWaterSource/PremisesWaterSource";

export const PREMISESWATERSOURCE_TITLE_FIELD = "premisesId";

export const PremisesWaterSourceTitle = (
  record: TPremisesWaterSource
): string => {
  return record.premisesId?.toString() || String(record.id);
};
