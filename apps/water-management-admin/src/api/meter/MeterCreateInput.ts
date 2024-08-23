import { InputJsonValue } from "../../types";
import { UsageCreateNestedManyWithoutMetersInput } from "./UsageCreateNestedManyWithoutMetersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MeterCreateInput = {
  coordinates?: InputJsonValue;
  installationDate?: Date | null;
  status?: "Option1" | null;
  tokenBalance?: number | null;
  usages?: UsageCreateNestedManyWithoutMetersInput;
  user?: UserWhereUniqueInput | null;
};
