import { MeterTypesWhereInput } from "./MeterTypesWhereInput";
import { MeterTypesOrderByInput } from "./MeterTypesOrderByInput";

export type MeterTypesFindManyArgs = {
  where?: MeterTypesWhereInput;
  orderBy?: Array<MeterTypesOrderByInput>;
  skip?: number;
  take?: number;
};
