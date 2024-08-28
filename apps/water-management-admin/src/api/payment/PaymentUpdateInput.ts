import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  appUser?: AppUserWhereUniqueInput | null;
  date?: Date | null;
};
