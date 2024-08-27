import { Logs as TLogs } from "../api/logs/Logs";

export const LOGS_TITLE_FIELD = "id";

export const LogsTitle = (record: TLogs): string => {
  return record.id?.toString() || String(record.id);
};
