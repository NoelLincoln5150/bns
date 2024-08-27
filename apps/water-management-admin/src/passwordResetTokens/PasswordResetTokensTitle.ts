import { PasswordResetTokens as TPasswordResetTokens } from "../api/passwordResetTokens/PasswordResetTokens";

export const PASSWORDRESETTOKENS_TITLE_FIELD = "id";

export const PasswordResetTokensTitle = (
  record: TPasswordResetTokens
): string => {
  return record.id?.toString() || String(record.id);
};
