import { B2bTransactionsUpdateManyWithoutCustomersItemsInput } from "./B2bTransactionsUpdateManyWithoutCustomersItemsInput";
import { CustomerMeterUpdateManyWithoutCustomersItemsInput } from "./CustomerMeterUpdateManyWithoutCustomersItemsInput";

export type CustomersUpdateInput = {
  b2bTransactionsItems?: B2bTransactionsUpdateManyWithoutCustomersItemsInput;
  customerMeters?: CustomerMeterUpdateManyWithoutCustomersItemsInput;
  deletedAt?: string | null;
  email?: string | null;
  hash?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
};
