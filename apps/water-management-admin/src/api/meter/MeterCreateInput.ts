import { InputJsonValue } from "../../types";
import { CustomerMeterCreateNestedManyWithoutMetersInput } from "./CustomerMeterCreateNestedManyWithoutMetersInput";
import { MeterTypesWhereUniqueInput } from "../meterTypes/MeterTypesWhereUniqueInput";
import { UsageWhereUniqueInput } from "../usage/UsageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MeterCreateInput = {
  coordinates?: InputJsonValue;
  customerMeters?: CustomerMeterCreateNestedManyWithoutMetersInput;
  installationDate?: Date | null;
  meterType?: MeterTypesWhereUniqueInput | null;
  status?:
    | "Active"
    | "Inactive"
    | "Suspended"
    | "Maintenance"
    | "Faulty"
    | "Closed"
    | "Pending"
    | "Disconnected"
    | null;
  tokenBalance?: number | null;
  usages?: UsageWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
