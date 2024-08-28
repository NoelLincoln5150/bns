import { JsonFilter } from "../../util/JsonFilter";
import { CustomerMeterListRelationFilter } from "../customerMeter/CustomerMeterListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { MeterTypesWhereUniqueInput } from "../meterTypes/MeterTypesWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UsageWhereUniqueInput } from "../usage/UsageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MeterWhereInput = {
  coordinates?: JsonFilter;
  customerMeters?: CustomerMeterListRelationFilter;
  id?: StringFilter;
  installationDate?: DateTimeNullableFilter;
  meterType?: MeterTypesWhereUniqueInput;
  status?:
    | "Active"
    | "Inactive"
    | "Suspended"
    | "Maintenance"
    | "Faulty"
    | "Closed"
    | "Pending"
    | "Disconnected";
  tokenBalance?: IntNullableFilter;
  usages?: UsageWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
