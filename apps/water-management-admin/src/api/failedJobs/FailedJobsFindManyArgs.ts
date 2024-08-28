import { FailedJobsWhereInput } from "./FailedJobsWhereInput";
import { FailedJobsOrderByInput } from "./FailedJobsOrderByInput";

export type FailedJobsFindManyArgs = {
  where?: FailedJobsWhereInput;
  orderBy?: Array<FailedJobsOrderByInput>;
  skip?: number;
  take?: number;
};
