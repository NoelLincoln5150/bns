import { B2bTransactionsCreateNestedManyWithoutCustomersItemsInput } from "./B2bTransactionsCreateNestedManyWithoutCustomersItemsInput";
import { CustomerMeterCreateNestedManyWithoutCustomersItemsInput } from "./CustomerMeterCreateNestedManyWithoutCustomersItemsInput";

export type CustomersCreateInput = {
  b2bTransactionsItems?: B2bTransactionsCreateNestedManyWithoutCustomersItemsInput;
  customerMeters?: CustomerMeterCreateNestedManyWithoutCustomersItemsInput;
  deletedAt?: string | null;
  email?: string | null;
  hash?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
};
