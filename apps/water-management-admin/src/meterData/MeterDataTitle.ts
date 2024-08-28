import { MeterData as TMeterData } from "../api/meterData/MeterData";

export const METERDATA_TITLE_FIELD = "id";

export const MeterDataTitle = (record: TMeterData): string => {
  return record.id?.toString() || String(record.id);
};
