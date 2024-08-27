import { BankPaybill as TBankPaybill } from "../api/bankPaybill/BankPaybill";

export const BANKPAYBILL_TITLE_FIELD = "name";

export const BankPaybillTitle = (record: TBankPaybill): string => {
  return record.name?.toString() || String(record.id);
};
