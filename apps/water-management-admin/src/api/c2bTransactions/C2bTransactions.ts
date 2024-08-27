import { JsonValue } from "type-fest";

export type C2bTransactions = {
  accepted: boolean | null;
  accountNumber: string | null;
  amount: number | null;
  completed: boolean | null;
  confirmed: boolean | null;
  contractNumber: string | null;
  createdAt: Date;
  customerId: number | null;
  deletedAt: Date | null;
  id: string;
  message: string | null;
  payload: JsonValue;
  transId: string | null;
  typeField: string | null;
  updatedAt: Date;
};
