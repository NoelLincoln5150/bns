import { SortOrder } from "../../util/SortOrder";

export type ShortCodesOrderByInput = {
  consumerKey?: SortOrder;
  consumerSecret?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  displayName?: SortOrder;
  enabled?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  registered?: SortOrder;
  shortcode?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
