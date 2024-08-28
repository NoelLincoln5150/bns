import { InputJsonValue } from "../../types";

export type C2bTransactionsUpdateInput = {
  accepted?: boolean | null;
  accountNumber?: string | null;
  amount?: number | null;
  completed?: boolean | null;
  confirmed?: boolean | null;
  contractNumber?: string | null;
  customerId?: number | null;
  deletedAt?: Date | null;
  message?: string | null;
  payload?: InputJsonValue;
  transId?: string | null;
  typeField?: string | null;
};
