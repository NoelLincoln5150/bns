import { FailedJobs as TFailedJobs } from "../api/failedJobs/FailedJobs";

export const FAILEDJOBS_TITLE_FIELD = "id";

export const FailedJobsTitle = (record: TFailedJobs): string => {
  return record.id?.toString() || String(record.id);
};
