import { Documents } from "../documents/Documents";

export type DocumentTypes = {
  code: string | null;
  createdAt: Date;
  deletedAt: Date | null;
  documentsItems?: Array<Documents>;
  id: string;
  movement: string | null;
  name: string | null;
  requirePayment: string | null;
  typeField: string | null;
  updatedAt: Date;
};
