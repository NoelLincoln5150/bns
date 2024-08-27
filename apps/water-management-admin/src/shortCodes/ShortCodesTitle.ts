import { ShortCodes as TShortCodes } from "../api/shortCodes/ShortCodes";

export const SHORTCODES_TITLE_FIELD = "id";

export const ShortCodesTitle = (record: TShortCodes): string => {
  return record.id?.toString() || String(record.id);
};
