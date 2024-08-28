import { ContractCreateNestedManyWithoutSuppliersItemsInput } from "./ContractCreateNestedManyWithoutSuppliersItemsInput";

export type SuppliersCreateInput = {
  contracts?: ContractCreateNestedManyWithoutSuppliersItemsInput;
  deletedAt?: Date | null;
  name?: string | null;
  numberField?: number | null;
  taxNumber?: string | null;
  typeField?: string | null;
};
