import { WaterTokens as TWaterTokens } from "../api/waterTokens/WaterTokens";

export const WATERTOKENS_TITLE_FIELD = "c2bTransactionId";

export const WaterTokensTitle = (record: TWaterTokens): string => {
  return record.c2bTransactionId?.toString() || String(record.id);
};
