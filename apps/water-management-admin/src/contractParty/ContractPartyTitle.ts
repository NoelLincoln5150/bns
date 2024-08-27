import { ContractParty as TContractParty } from "../api/contractParty/ContractParty";

export const CONTRACTPARTY_TITLE_FIELD = "name";

export const ContractPartyTitle = (record: TContractParty): string => {
  return record.name?.toString() || String(record.id);
};
