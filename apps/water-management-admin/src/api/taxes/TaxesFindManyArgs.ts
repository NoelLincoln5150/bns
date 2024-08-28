import { TaxesWhereInput } from "./TaxesWhereInput";
import { TaxesOrderByInput } from "./TaxesOrderByInput";

export type TaxesFindManyArgs = {
  where?: TaxesWhereInput;
  orderBy?: Array<TaxesOrderByInput>;
  skip?: number;
  take?: number;
};
