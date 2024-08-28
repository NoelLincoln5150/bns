import { PasswordResetTokens as TPasswordResetTokens } from "../api/passwordResetTokens/PasswordResetTokens";

export const PASSWORDRESETTOKENS_TITLE_FIELD = "token";

export const PasswordResetTokensTitle = (
  record: TPasswordResetTokens
): string => {
  return record.token?.toString() || String(record.id);
};
