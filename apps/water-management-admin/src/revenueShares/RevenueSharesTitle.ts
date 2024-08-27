import { RevenueShares as TRevenueShares } from "../api/revenueShares/RevenueShares";

export const REVENUESHARES_TITLE_FIELD = "id";

export const RevenueSharesTitle = (record: TRevenueShares): string => {
  return record.id?.toString() || String(record.id);
};
