import { ContractPartyWhereInput } from "./ContractPartyWhereInput";
import { ContractPartyOrderByInput } from "./ContractPartyOrderByInput";

export type ContractPartyFindManyArgs = {
  where?: ContractPartyWhereInput;
  orderBy?: Array<ContractPartyOrderByInput>;
  skip?: number;
  take?: number;
};
