import { Decimal } from "decimal.js";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LogsCreateInput = {
  action?: string | null;
  deletedAt?: string | null;
  ipAddress?: Decimal | null;
  message?: string | null;
  requestPayload?: string | null;
  resourceId?: string | null;
  resourceModel?: string | null;
  updateValues?: Date | null;
  userId?: UserWhereUniqueInput | null;
};
