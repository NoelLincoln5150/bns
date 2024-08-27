import { WaterSources as TWaterSources } from "../api/waterSources/WaterSources";

export const WATERSOURCES_TITLE_FIELD = "name";

export const WaterSourcesTitle = (record: TWaterSources): string => {
  return record.name?.toString() || String(record.id);
};
