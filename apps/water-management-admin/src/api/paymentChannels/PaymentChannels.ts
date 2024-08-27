import { Decimal } from "decimal.js";
import { PaymentTypes } from "../paymentTypes/PaymentTypes";

export type PaymentChannels = {
  accountNumber: Decimal | null;
  channel: string | null;
  createdAt: Date;
  deletedAt: string | null;
  enabled: string | null;
  id: string;
  payableId: string | null;
  payableType: string | null;
  paymentType?: PaymentTypes | null;
  updatedAt: Date;
};
