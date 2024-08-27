export type FailedJobsUpdateInput = {
  connection?: string | null;
  exception?: string | null;
  failedAt?: Date | null;
  payload?: string | null;
  queue?: string | null;
  uuid?: string | null;
};
