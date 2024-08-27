import { Otps as TOtps } from "../api/otps/Otps";

export const OTPS_TITLE_FIELD = "identifier";

export const OtpsTitle = (record: TOtps): string => {
  return record.identifier?.toString() || String(record.id);
};
