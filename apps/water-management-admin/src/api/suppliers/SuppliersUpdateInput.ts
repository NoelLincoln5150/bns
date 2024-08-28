import { ContractUpdateManyWithoutSuppliersItemsInput } from "./ContractUpdateManyWithoutSuppliersItemsInput";

export type SuppliersUpdateInput = {
  contracts?: ContractUpdateManyWithoutSuppliersItemsInput;
  deletedAt?: Date | null;
  name?: string | null;
  numberField?: number | null;
  taxNumber?: string | null;
  typeField?: string | null;
};
