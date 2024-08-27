import { StocksWhereInput } from "./StocksWhereInput";
import { StocksOrderByInput } from "./StocksOrderByInput";

export type StocksFindManyArgs = {
  where?: StocksWhereInput;
  orderBy?: Array<StocksOrderByInput>;
  skip?: number;
  take?: number;
};
