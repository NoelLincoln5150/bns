import { Suppliers } from "../suppliers/Suppliers";

export type Contract = {
  approved: boolean | null;
  createdAt: Date;
  id: string;
  numberField: string | null;
  pricePerUnit: number | null;
  status?:
    | "Draft"
    | "PendingApproval"
    | "Approved"
    | "Rejected"
    | "SentforSignature"
    | "PartiallySigned"
    | "FullySigned"
    | "Active"
    | "OnHold"
    | "AmendmentinProgress"
    | "Expired"
    | "Terminated"
    | "Completed"
    | "Renewed"
    | "Cancelled"
    | null;
  supplierNumber?: Suppliers | null;
  titlle: string | null;
  updatedAt: Date;
};
