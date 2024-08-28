import { DocumentPayments } from "../documentPayments/DocumentPayments";
import { PaymentChannels } from "../paymentChannels/PaymentChannels";

export type PaymentTypes = {
  canSettle: string | null;
  createdAt: Date;
  deletedAt: string | null;
  displayName: string | null;
  documentPaymentsItems?: Array<DocumentPayments>;
  enabled: string | null;
  id: string;
  name: string | null;
  paymentChannelsItems?: Array<PaymentChannels>;
  updatedAt: Date;
};
