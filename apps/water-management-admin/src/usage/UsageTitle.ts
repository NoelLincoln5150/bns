import { Usage as TUsage } from "../api/usage/Usage";

export const USAGE_TITLE_FIELD = "meterRelation";

export const UsageTitle = (record: TUsage): string => {
  return record.meterRelation?.toString() || String(record.id);
};
