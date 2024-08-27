import { Customers as TCustomers } from "../api/customers/Customers";

export const CUSTOMERS_TITLE_FIELD = "name";

export const CustomersTitle = (record: TCustomers): string => {
  return record.name?.toString() || String(record.id);
};
