import { MetersWhereInput } from "./MetersWhereInput";
import { MetersOrderByInput } from "./MetersOrderByInput";

export type MetersFindManyArgs = {
  where?: MetersWhereInput;
  orderBy?: Array<MetersOrderByInput>;
  skip?: number;
  take?: number;
};
