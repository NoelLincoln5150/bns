import { InputJsonValue } from "../../types";
import { UsageUpdateManyWithoutMetersInput } from "./UsageUpdateManyWithoutMetersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MeterUpdateInput = {
  coordinates?: InputJsonValue;
  installationDate?: Date | null;
  status?: "Option1" | null;
  tokenBalance?: number | null;
  usages?: UsageUpdateManyWithoutMetersInput;
  user?: UserWhereUniqueInput | null;
};
