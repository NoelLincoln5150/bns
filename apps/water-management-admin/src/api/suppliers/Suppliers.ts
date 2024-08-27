import { Contract } from "../contract/Contract";

export type Suppliers = {
  contracts?: Array<Contract>;
  createdAt: Date;
  deletedAt: Date | null;
  id: string;
  name: string | null;
  numberField: number | null;
  taxNumber: string | null;
  typeField: string | null;
  updatedAt: Date;
};
