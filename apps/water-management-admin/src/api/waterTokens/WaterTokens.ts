import { JsonValue } from "type-fest";

export type WaterTokens = {
  c2bTransactionId: string | null;
  charges: number | null;
  createdAt: Date;
  deletedAt: Date | null;
  expired: Date | null;
  id: string;
  liters: number | null;
  tokenAmount: number | null;
  tokenRequests: JsonValue;
  updatedAt: Date;
};
