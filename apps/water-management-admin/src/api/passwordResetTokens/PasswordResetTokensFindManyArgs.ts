import { PasswordResetTokensWhereInput } from "./PasswordResetTokensWhereInput";
import { PasswordResetTokensOrderByInput } from "./PasswordResetTokensOrderByInput";

export type PasswordResetTokensFindManyArgs = {
  where?: PasswordResetTokensWhereInput;
  orderBy?: Array<PasswordResetTokensOrderByInput>;
  skip?: number;
  take?: number;
};
