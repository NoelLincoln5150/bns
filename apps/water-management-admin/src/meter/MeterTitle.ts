import { Meter as TMeter } from "../api/meter/Meter";

export const METER_TITLE_FIELD = "id";

export const MeterTitle = (record: TMeter): string => {
  return record.id?.toString() || String(record.id);
};
