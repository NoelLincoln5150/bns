import { WaterSources as TWaterSources } from "../api/waterSources/WaterSources";

export const WATERSOURCES_TITLE_FIELD = "id";

export const WaterSourcesTitle = (record: TWaterSources): string => {
  return record.id?.toString() || String(record.id);
};
