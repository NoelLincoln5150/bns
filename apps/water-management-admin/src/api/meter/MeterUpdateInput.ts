import { InputJsonValue } from "../../types";
import { CustomerMeterUpdateManyWithoutMetersInput } from "./CustomerMeterUpdateManyWithoutMetersInput";
import { MeterTypesWhereUniqueInput } from "../meterTypes/MeterTypesWhereUniqueInput";
import { UsageWhereUniqueInput } from "../usage/UsageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MeterUpdateInput = {
  coordinates?: InputJsonValue;
  customerMeters?: CustomerMeterUpdateManyWithoutMetersInput;
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
