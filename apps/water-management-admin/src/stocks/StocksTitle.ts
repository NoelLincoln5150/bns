import { Stocks as TStocks } from "../api/stocks/Stocks";

export const STOCKS_TITLE_FIELD = "id";

export const StocksTitle = (record: TStocks): string => {
  return record.id?.toString() || String(record.id);
};
