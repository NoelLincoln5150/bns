import { Logs as TLogs } from "../api/logs/Logs";

export const LOGS_TITLE_FIELD = "action";

export const LogsTitle = (record: TLogs): string => {
  return record.action?.toString() || String(record.id);
};
