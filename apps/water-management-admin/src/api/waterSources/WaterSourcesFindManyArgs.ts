import { WaterSourcesWhereInput } from "./WaterSourcesWhereInput";
import { WaterSourcesOrderByInput } from "./WaterSourcesOrderByInput";

export type WaterSourcesFindManyArgs = {
  where?: WaterSourcesWhereInput;
  orderBy?: Array<WaterSourcesOrderByInput>;
  skip?: number;
  take?: number;
};
