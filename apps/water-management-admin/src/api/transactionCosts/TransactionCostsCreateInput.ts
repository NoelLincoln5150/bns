import { Decimal } from "decimal.js";

export type TransactionCostsCreateInput = {
  fee?: Decimal | null;
  max?: Decimal | null;
  min?: Decimal | null;
};
