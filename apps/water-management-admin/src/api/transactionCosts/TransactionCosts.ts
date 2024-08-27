import { Decimal } from "decimal.js";

export type TransactionCosts = {
  createdAt: Date;
  fee: Decimal | null;
  id: string;
  max: Decimal | null;
  min: Decimal | null;
  updatedAt: Date;
};
