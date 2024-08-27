import { SortOrder } from "../../util/SortOrder";

export type NotesOrderByInput = {
  body?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  id?: SortOrder;
  mutable?: SortOrder;
  notableId?: SortOrder;
  notableType?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
