import { CustomersWhereUniqueInput } from "../customers/CustomersWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { MeterWhereUniqueInput } from "../meter/MeterWhereUniqueInput";

export type CustomerMeterWhereInput = {
  customer?: CustomersWhereUniqueInput;
  id?: StringFilter;
  meterId?: MeterWhereUniqueInput;
};
