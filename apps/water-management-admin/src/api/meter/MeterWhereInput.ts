import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UsageWhereUniqueInput } from "../usage/UsageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MeterWhereInput = {
  coordinates?: JsonFilter;
  id?: StringFilter;
  installationDate?: DateTimeNullableFilter;
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
