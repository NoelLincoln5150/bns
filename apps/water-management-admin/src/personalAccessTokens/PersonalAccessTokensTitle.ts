import { PersonalAccessTokens as TPersonalAccessTokens } from "../api/personalAccessTokens/PersonalAccessTokens";

export const PERSONALACCESSTOKENS_TITLE_FIELD = "name";

export const PersonalAccessTokensTitle = (
  record: TPersonalAccessTokens
): string => {
  return record.name?.toString() || String(record.id);
};
