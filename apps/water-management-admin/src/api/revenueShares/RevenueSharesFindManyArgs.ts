import { RevenueSharesWhereInput } from "./RevenueSharesWhereInput";
import { RevenueSharesOrderByInput } from "./RevenueSharesOrderByInput";

export type RevenueSharesFindManyArgs = {
  where?: RevenueSharesWhereInput;
  orderBy?: Array<RevenueSharesOrderByInput>;
  skip?: number;
  take?: number;
};
