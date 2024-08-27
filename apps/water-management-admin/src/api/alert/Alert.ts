import { PrepaidMeter } from "../prepaidMeter/PrepaidMeter";

export type Alert = {
  createdAt: Date;
  id: string;
  level?: "Info" | "Warning" | "Urgent" | "Error" | "Critical" | null;
  message: string | null;
  prepaidMeter?: PrepaidMeter | null;
  updatedAt: Date;
};
