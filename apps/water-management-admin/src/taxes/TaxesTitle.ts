import { Taxes as TTaxes } from "../api/taxes/Taxes";

export const TAXES_TITLE_FIELD = "id";

export const TaxesTitle = (record: TTaxes): string => {
  return record.id?.toString() || String(record.id);
};
