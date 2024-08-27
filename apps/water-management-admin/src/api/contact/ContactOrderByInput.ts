import { SortOrder } from "../../util/SortOrder";

export type ContactOrderByInput = {
  active?: SortOrder;
  contactableId?: SortOrder;
  contactableType?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  id?: SortOrder;
  info?: SortOrder;
  name?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
