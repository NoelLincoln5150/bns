import { DocumentPaymentsCreateNestedManyWithoutPaymentTypesItemsInput } from "./DocumentPaymentsCreateNestedManyWithoutPaymentTypesItemsInput";
import { PaymentChannelsCreateNestedManyWithoutPaymentTypesItemsInput } from "./PaymentChannelsCreateNestedManyWithoutPaymentTypesItemsInput";

export type PaymentTypesCreateInput = {
  canSettle?: string | null;
  deletedAt?: string | null;
  displayName?: string | null;
  documentPaymentsItems?: DocumentPaymentsCreateNestedManyWithoutPaymentTypesItemsInput;
  enabled?: string | null;
  name?: string | null;
  paymentChannelsItems?: PaymentChannelsCreateNestedManyWithoutPaymentTypesItemsInput;
};
