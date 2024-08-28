import { SortOrder } from "../../util/SortOrder";

export type ContractPartyOrderByInput = {
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  numberField?: SortOrder;
  taxNumber?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
