import { Documents } from "../documents/Documents";
import { PaymentTypes } from "../paymentTypes/PaymentTypes";

export type DocumentPayments = {
  createdAt: Date;
  document?: Documents | null;
  id: string;
  paymentType?: Array<PaymentTypes>;
  updatedAt: Date;
};
