import { TaxablesWhereInput } from "./TaxablesWhereInput";
import { TaxablesOrderByInput } from "./TaxablesOrderByInput";

export type TaxablesFindManyArgs = {
  where?: TaxablesWhereInput;
  orderBy?: Array<TaxablesOrderByInput>;
  skip?: number;
  take?: number;
};
