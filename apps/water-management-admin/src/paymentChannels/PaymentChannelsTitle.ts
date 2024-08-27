import { PaymentChannels as TPaymentChannels } from "../api/paymentChannels/PaymentChannels";

export const PAYMENTCHANNELS_TITLE_FIELD = "channel";

export const PaymentChannelsTitle = (record: TPaymentChannels): string => {
  return record.channel?.toString() || String(record.id);
};
