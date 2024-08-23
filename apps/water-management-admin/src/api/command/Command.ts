import { PrepaidMeter } from "../prepaidMeter/PrepaidMeter";

export type Command = {
  commandType?: "Option1" | null;
  createdAt: Date;
  id: string;
  parameter: string | null;
  prepaidMeter?: PrepaidMeter | null;
  sentAt: Date | null;
  updatedAt: Date;
};
