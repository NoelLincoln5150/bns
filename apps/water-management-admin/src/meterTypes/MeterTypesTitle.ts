import { MeterTypes as TMeterTypes } from "../api/meterTypes/MeterTypes";

export const METERTYPES_TITLE_FIELD = "id";

export const MeterTypesTitle = (record: TMeterTypes): string => {
  return record.id?.toString() || String(record.id);
};
