import { DocumentNumbersWhereInput } from "./DocumentNumbersWhereInput";
import { DocumentNumbersOrderByInput } from "./DocumentNumbersOrderByInput";

export type DocumentNumbersFindManyArgs = {
  where?: DocumentNumbersWhereInput;
  orderBy?: Array<DocumentNumbersOrderByInput>;
  skip?: number;
  take?: number;
};
