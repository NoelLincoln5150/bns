import { WaterTokensWhereInput } from "./WaterTokensWhereInput";
import { WaterTokensOrderByInput } from "./WaterTokensOrderByInput";

export type WaterTokensFindManyArgs = {
  where?: WaterTokensWhereInput;
  orderBy?: Array<WaterTokensOrderByInput>;
  skip?: number;
  take?: number;
};
