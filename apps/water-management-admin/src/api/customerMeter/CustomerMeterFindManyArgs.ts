import { CustomerMeterWhereInput } from "./CustomerMeterWhereInput";
import { CustomerMeterOrderByInput } from "./CustomerMeterOrderByInput";

export type CustomerMeterFindManyArgs = {
  where?: CustomerMeterWhereInput;
  orderBy?: Array<CustomerMeterOrderByInput>;
  skip?: number;
  take?: number;
};
