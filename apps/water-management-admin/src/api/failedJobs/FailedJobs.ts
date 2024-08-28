export type FailedJobs = {
  connection: string | null;
  createdAt: Date;
  exception: string | null;
  failedAt: Date | null;
  id: string;
  payload: string | null;
  queue: string | null;
  updatedAt: Date;
  uuid: string | null;
};
