import { PrepaidMeter } from "../prepaidMeter/PrepaidMeter";

export type Alert = {
  createdAt: Date;
  id: string;
  level?: "Option1" | null;
  message: string | null;
  prepaidMeter?: PrepaidMeter | null;
  updatedAt: Date;
};
