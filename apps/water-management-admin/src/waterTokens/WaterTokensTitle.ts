import { WaterTokens as TWaterTokens } from "../api/waterTokens/WaterTokens";

export const WATERTOKENS_TITLE_FIELD = "id";

export const WaterTokensTitle = (record: TWaterTokens): string => {
  return record.id?.toString() || String(record.id);
};
