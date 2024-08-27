import { InputJsonValue } from "../../types";

export type WaterTokensCreateInput = {
  c2bTransactionId?: string | null;
  charges?: number | null;
  deletedAt?: Date | null;
  expired?: Date | null;
  liters?: number | null;
  tokenAmount?: number | null;
  tokenRequests?: InputJsonValue;
};
