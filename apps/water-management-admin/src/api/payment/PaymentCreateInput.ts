import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  appUser?: AppUserWhereUniqueInput | null;
  date?: Date | null;
};
