import { CustomersWhereUniqueInput } from "../customers/CustomersWhereUniqueInput";
import { MeterWhereUniqueInput } from "../meter/MeterWhereUniqueInput";

export type CustomerMeterCreateInput = {
  customer?: CustomersWhereUniqueInput | null;
  meterId?: MeterWhereUniqueInput | null;
};
