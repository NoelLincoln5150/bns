import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  appUser?: AppUserWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
};
