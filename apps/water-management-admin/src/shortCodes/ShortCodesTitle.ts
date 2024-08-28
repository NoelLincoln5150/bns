import { ShortCodes as TShortCodes } from "../api/shortCodes/ShortCodes";

export const SHORTCODES_TITLE_FIELD = "displayName";

export const ShortCodesTitle = (record: TShortCodes): string => {
  return record.displayName?.toString() || String(record.id);
};
