import { DocumentTypesWhereInput } from "./DocumentTypesWhereInput";
import { DocumentTypesOrderByInput } from "./DocumentTypesOrderByInput";

export type DocumentTypesFindManyArgs = {
  where?: DocumentTypesWhereInput;
  orderBy?: Array<DocumentTypesOrderByInput>;
  skip?: number;
  take?: number;
};
