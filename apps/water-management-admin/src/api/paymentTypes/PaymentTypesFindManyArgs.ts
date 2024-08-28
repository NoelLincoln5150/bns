import { PaymentTypesWhereInput } from "./PaymentTypesWhereInput";
import { PaymentTypesOrderByInput } from "./PaymentTypesOrderByInput";

export type PaymentTypesFindManyArgs = {
  where?: PaymentTypesWhereInput;
  orderBy?: Array<PaymentTypesOrderByInput>;
  skip?: number;
  take?: number;
};
