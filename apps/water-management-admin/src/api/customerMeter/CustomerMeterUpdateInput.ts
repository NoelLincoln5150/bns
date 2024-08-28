import { CustomersWhereUniqueInput } from "../customers/CustomersWhereUniqueInput";
import { MeterWhereUniqueInput } from "../meter/MeterWhereUniqueInput";

export type CustomerMeterUpdateInput = {
  customer?: CustomersWhereUniqueInput | null;
  meterId?: MeterWhereUniqueInput | null;
};
