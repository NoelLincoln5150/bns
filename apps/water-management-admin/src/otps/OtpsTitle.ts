import { Otps as TOtps } from "../api/otps/Otps";

export const OTPS_TITLE_FIELD = "id";

export const OtpsTitle = (record: TOtps): string => {
  return record.id?.toString() || String(record.id);
};
