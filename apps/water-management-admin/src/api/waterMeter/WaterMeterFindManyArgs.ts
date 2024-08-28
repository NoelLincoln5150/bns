import { WaterMeterWhereInput } from "./WaterMeterWhereInput";
import { WaterMeterOrderByInput } from "./WaterMeterOrderByInput";

export type WaterMeterFindManyArgs = {
  where?: WaterMeterWhereInput;
  orderBy?: Array<WaterMeterOrderByInput>;
  skip?: number;
  take?: number;
};
