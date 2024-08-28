import { SortOrder } from "../../util/SortOrder";

export type TaxablesOrderByInput = {
  apply?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  included?: SortOrder;
  rate?: SortOrder;
  taxId?: SortOrder;
  taxableId?: SortOrder;
  taxableType?: SortOrder;
  updatedAt?: SortOrder;
};
