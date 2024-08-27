import { InputJsonValue } from "../../types";
import { UsageWhereUniqueInput } from "../usage/UsageWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MeterUpdateInput = {
  coordinates?: InputJsonValue;
  installationDate?: Date | null;
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
