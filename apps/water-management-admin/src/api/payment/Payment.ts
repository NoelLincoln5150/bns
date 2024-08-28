import { AppUser } from "../appUser/AppUser";

export type Payment = {
  amount: number | null;
  appUser?: AppUser | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  updatedAt: Date;
};
