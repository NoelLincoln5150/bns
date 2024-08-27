import { Taxables as TTaxables } from "../api/taxables/Taxables";

export const TAXABLES_TITLE_FIELD = "id";

export const TaxablesTitle = (record: TTaxables): string => {
  return record.id?.toString() || String(record.id);
};
