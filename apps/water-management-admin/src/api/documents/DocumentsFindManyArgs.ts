import { DocumentsWhereInput } from "./DocumentsWhereInput";
import { DocumentsOrderByInput } from "./DocumentsOrderByInput";

export type DocumentsFindManyArgs = {
  where?: DocumentsWhereInput;
  orderBy?: Array<DocumentsOrderByInput>;
  skip?: number;
  take?: number;
};
