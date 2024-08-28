import { PrepaidMeter as TPrepaidMeter } from "../api/prepaidMeter/PrepaidMeter";

export const PREPAIDMETER_TITLE_FIELD = "meterNumber";

export const PrepaidMeterTitle = (record: TPrepaidMeter): string => {
  return record.meterNumber?.toString() || String(record.id);
};
