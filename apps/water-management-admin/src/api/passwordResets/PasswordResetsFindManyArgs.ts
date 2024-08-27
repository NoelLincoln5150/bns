import { PasswordResetsWhereInput } from "./PasswordResetsWhereInput";
import { PasswordResetsOrderByInput } from "./PasswordResetsOrderByInput";

export type PasswordResetsFindManyArgs = {
  where?: PasswordResetsWhereInput;
  orderBy?: Array<PasswordResetsOrderByInput>;
  skip?: number;
  take?: number;
};
