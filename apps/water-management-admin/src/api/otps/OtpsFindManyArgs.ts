import { OtpsWhereInput } from "./OtpsWhereInput";
import { OtpsOrderByInput } from "./OtpsOrderByInput";

export type OtpsFindManyArgs = {
  where?: OtpsWhereInput;
  orderBy?: Array<OtpsOrderByInput>;
  skip?: number;
  take?: number;
};
