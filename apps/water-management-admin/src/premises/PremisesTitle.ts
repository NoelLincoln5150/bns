import { Premises as TPremises } from "../api/premises/Premises";

export const PREMISES_TITLE_FIELD = "contractNumber";

export const PremisesTitle = (record: TPremises): string => {
  return record.contractNumber?.toString() || String(record.id);
};
