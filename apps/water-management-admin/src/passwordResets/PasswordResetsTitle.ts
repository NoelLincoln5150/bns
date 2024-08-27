import { PasswordResets as TPasswordResets } from "../api/passwordResets/PasswordResets";

export const PASSWORDRESETS_TITLE_FIELD = "id";

export const PasswordResetsTitle = (record: TPasswordResets): string => {
  return record.id?.toString() || String(record.id);
};
