import { Stocks as TStocks } from "../api/stocks/Stocks";

export const STOCKS_TITLE_FIELD = "documentId";

export const StocksTitle = (record: TStocks): string => {
  return record.documentId?.toString() || String(record.id);
};
