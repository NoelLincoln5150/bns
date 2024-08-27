import { Decimal } from "decimal.js";
import { PaymentTypesWhereUniqueInput } from "../paymentTypes/PaymentTypesWhereUniqueInput";

export type PaymentChannelsCreateInput = {
  accountNumber?: Decimal | null;
  channel?: string | null;
  deletedAt?: string | null;
  enabled?: string | null;
  payableId?: string | null;
  payableType?: string | null;
  paymentType?: PaymentTypesWhereUniqueInput | null;
};
