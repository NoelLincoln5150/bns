import { Customers as TCustomers } from "../api/customers/Customers";

export const CUSTOMERS_TITLE_FIELD = "id";

export const CustomersTitle = (record: TCustomers): string => {
  return record.id?.toString() || String(record.id);
};
