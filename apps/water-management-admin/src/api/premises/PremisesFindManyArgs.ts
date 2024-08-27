import { PremisesWhereInput } from "./PremisesWhereInput";
import { PremisesOrderByInput } from "./PremisesOrderByInput";

export type PremisesFindManyArgs = {
  where?: PremisesWhereInput;
  orderBy?: Array<PremisesOrderByInput>;
  skip?: number;
  take?: number;
};
