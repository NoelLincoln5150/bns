import { CustomerMeter as TCustomerMeter } from "../api/customerMeter/CustomerMeter";

export const CUSTOMERMETER_TITLE_FIELD = "id";

export const CustomerMeterTitle = (record: TCustomerMeter): string => {
  return record.id?.toString() || String(record.id);
};
