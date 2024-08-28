import { PasswordResets as TPasswordResets } from "../api/passwordResets/PasswordResets";

export const PASSWORDRESETS_TITLE_FIELD = "token";

export const PasswordResetsTitle = (record: TPasswordResets): string => {
  return record.token?.toString() || String(record.id);
};
