import { Decimal } from "decimal.js";
import { User } from "../user/User";

export type Logs = {
  action: string | null;
  createdAt: Date;
  deletedAt: string | null;
  id: string;
  ipAddress: Decimal | null;
  message: string | null;
  requestPayload: string | null;
  resourceId: string | null;
  resourceModel: string | null;
  updateValues: Date | null;
  updatedAt: Date;
  userId?: User | null;
};
