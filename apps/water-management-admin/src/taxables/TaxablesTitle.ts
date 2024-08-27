import { Taxables as TTaxables } from "../api/taxables/Taxables";

export const TAXABLES_TITLE_FIELD = "apply";

export const TaxablesTitle = (record: TTaxables): string => {
  return record.apply?.toString() || String(record.id);
};
