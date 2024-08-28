import { WaterMeter as TWaterMeter } from "../api/waterMeter/WaterMeter";

export const WATERMETER_TITLE_FIELD = "id";

export const WaterMeterTitle = (record: TWaterMeter): string => {
  return record.id?.toString() || String(record.id);
};
