import { LogsWhereInput } from "./LogsWhereInput";
import { LogsOrderByInput } from "./LogsOrderByInput";

export type LogsFindManyArgs = {
  where?: LogsWhereInput;
  orderBy?: Array<LogsOrderByInput>;
  skip?: number;
  take?: number;
};
