import { Taxes as TTaxes } from "../api/taxes/Taxes";

export const TAXES_TITLE_FIELD = "name";

export const TaxesTitle = (record: TTaxes): string => {
  return record.name?.toString() || String(record.id);
};
