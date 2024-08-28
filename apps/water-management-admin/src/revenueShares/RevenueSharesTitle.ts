import { RevenueShares as TRevenueShares } from "../api/revenueShares/RevenueShares";

export const REVENUESHARES_TITLE_FIELD = "contractNumber";

export const RevenueSharesTitle = (record: TRevenueShares): string => {
  return record.contractNumber?.toString() || String(record.id);
};
