import { PaymentChannelsWhereInput } from "./PaymentChannelsWhereInput";
import { PaymentChannelsOrderByInput } from "./PaymentChannelsOrderByInput";

export type PaymentChannelsFindManyArgs = {
  where?: PaymentChannelsWhereInput;
  orderBy?: Array<PaymentChannelsOrderByInput>;
  skip?: number;
  take?: number;
};
