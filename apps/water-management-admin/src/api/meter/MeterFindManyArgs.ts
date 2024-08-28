import { MeterWhereInput } from "./MeterWhereInput";
import { MeterOrderByInput } from "./MeterOrderByInput";

export type MeterFindManyArgs = {
  where?: MeterWhereInput;
  orderBy?: Array<MeterOrderByInput>;
  skip?: number;
  take?: number;
};
