import { DocumentPaymentsWhereInput } from "./DocumentPaymentsWhereInput";
import { DocumentPaymentsOrderByInput } from "./DocumentPaymentsOrderByInput";

export type DocumentPaymentsFindManyArgs = {
  where?: DocumentPaymentsWhereInput;
  orderBy?: Array<DocumentPaymentsOrderByInput>;
  skip?: number;
  take?: number;
};
