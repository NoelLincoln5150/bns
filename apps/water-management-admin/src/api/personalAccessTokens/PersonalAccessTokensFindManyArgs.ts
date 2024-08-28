import { PersonalAccessTokensWhereInput } from "./PersonalAccessTokensWhereInput";
import { PersonalAccessTokensOrderByInput } from "./PersonalAccessTokensOrderByInput";

export type PersonalAccessTokensFindManyArgs = {
  where?: PersonalAccessTokensWhereInput;
  orderBy?: Array<PersonalAccessTokensOrderByInput>;
  skip?: number;
  take?: number;
};
