import { PaymentChannels as TPaymentChannels } from "../api/paymentChannels/PaymentChannels";

export const PAYMENTCHANNELS_TITLE_FIELD = "id";

export const PaymentChannelsTitle = (record: TPaymentChannels): string => {
  return record.id?.toString() || String(record.id);
};
