import { Contract as TContract } from "../api/contract/Contract";

export const CONTRACT_TITLE_FIELD = "numberField";

export const ContractTitle = (record: TContract): string => {
  return record.numberField?.toString() || String(record.id);
};
