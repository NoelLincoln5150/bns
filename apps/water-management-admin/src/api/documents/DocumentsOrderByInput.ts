import { SortOrder } from "../../util/SortOrder";

export type DocumentsOrderByInput = {
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  documentTypeId?: SortOrder;
  documentableId?: SortOrder;
  documentableType?: SortOrder;
  id?: SortOrder;
  numberField?: SortOrder;
  paid?: SortOrder;
  updatedAt?: SortOrder;
};
