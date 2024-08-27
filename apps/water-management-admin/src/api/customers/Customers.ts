import { B2bTransactions } from "../b2bTransactions/B2bTransactions";
import { CustomerMeter } from "../customerMeter/CustomerMeter";

export type Customers = {
  b2bTransactionsItems?: Array<B2bTransactions>;
  createdAt: Date;
  customerMeters?: Array<CustomerMeter>;
  deletedAt: string | null;
  email: string | null;
  hash: string | null;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  updatedAt: Date;
};
