import { Premises as TPremises } from "../api/premises/Premises";

export const PREMISES_TITLE_FIELD = "id";

export const PremisesTitle = (record: TPremises): string => {
  return record.id?.toString() || String(record.id);
};
