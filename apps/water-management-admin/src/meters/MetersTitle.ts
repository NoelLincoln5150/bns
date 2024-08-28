import { Meters as TMeters } from "../api/meters/Meters";

export const METERS_TITLE_FIELD = "id";

export const MetersTitle = (record: TMeters): string => {
  return record.id?.toString() || String(record.id);
};
