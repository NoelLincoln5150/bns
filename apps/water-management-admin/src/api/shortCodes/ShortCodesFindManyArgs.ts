import { ShortCodesWhereInput } from "./ShortCodesWhereInput";
import { ShortCodesOrderByInput } from "./ShortCodesOrderByInput";

export type ShortCodesFindManyArgs = {
  where?: ShortCodesWhereInput;
  orderBy?: Array<ShortCodesOrderByInput>;
  skip?: number;
  take?: number;
};
