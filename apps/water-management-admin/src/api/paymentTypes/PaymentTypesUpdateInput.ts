import { DocumentPaymentsUpdateManyWithoutPaymentTypesItemsInput } from "./DocumentPaymentsUpdateManyWithoutPaymentTypesItemsInput";
import { PaymentChannelsUpdateManyWithoutPaymentTypesItemsInput } from "./PaymentChannelsUpdateManyWithoutPaymentTypesItemsInput";

export type PaymentTypesUpdateInput = {
  canSettle?: string | null;
  deletedAt?: string | null;
  displayName?: string | null;
  documentPaymentsItems?: DocumentPaymentsUpdateManyWithoutPaymentTypesItemsInput;
  enabled?: string | null;
  name?: string | null;
  paymentChannelsItems?: PaymentChannelsUpdateManyWithoutPaymentTypesItemsInput;
};
