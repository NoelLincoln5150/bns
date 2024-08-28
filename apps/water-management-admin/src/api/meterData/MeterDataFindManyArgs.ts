import { MeterDataWhereInput } from "./MeterDataWhereInput";
import { MeterDataOrderByInput } from "./MeterDataOrderByInput";

export type MeterDataFindManyArgs = {
  where?: MeterDataWhereInput;
  orderBy?: Array<MeterDataOrderByInput>;
  skip?: number;
  take?: number;
};
