import { PrepaidMeterWhereInput } from "./PrepaidMeterWhereInput";
import { PrepaidMeterOrderByInput } from "./PrepaidMeterOrderByInput";

export type PrepaidMeterFindManyArgs = {
  where?: PrepaidMeterWhereInput;
  orderBy?: Array<PrepaidMeterOrderByInput>;
  skip?: number;
  take?: number;
};
