import { Decimal } from "decimal.js";

export type TransactionCostsUpdateInput = {
  fee?: Decimal | null;
  max?: Decimal | null;
  min?: Decimal | null;
};
