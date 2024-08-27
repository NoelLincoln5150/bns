import { PersonalAccessTokens as TPersonalAccessTokens } from "../api/personalAccessTokens/PersonalAccessTokens";

export const PERSONALACCESSTOKENS_TITLE_FIELD = "id";

export const PersonalAccessTokensTitle = (
  record: TPersonalAccessTokens
): string => {
  return record.id?.toString() || String(record.id);
};
