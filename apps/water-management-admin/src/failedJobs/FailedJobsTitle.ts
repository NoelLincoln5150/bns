import { FailedJobs as TFailedJobs } from "../api/failedJobs/FailedJobs";

export const FAILEDJOBS_TITLE_FIELD = "connection";

export const FailedJobsTitle = (record: TFailedJobs): string => {
  return record.connection?.toString() || String(record.id);
};
