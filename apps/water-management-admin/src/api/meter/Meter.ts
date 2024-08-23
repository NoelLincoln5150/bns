import { JsonValue } from "type-fest";
import { Usage } from "../usage/Usage";
import { User } from "../user/User";

export type Meter = {
  coordinates: JsonValue;
  createdAt: Date;
  id: string;
  installationDate: Date | null;
  status?: "Option1" | null;
  tokenBalance: number | null;
  updatedAt: Date;
  usages?: Array<Usage>;
  user?: User | null;
};
