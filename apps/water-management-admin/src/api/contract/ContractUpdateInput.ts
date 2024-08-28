import { SuppliersWhereUniqueInput } from "../suppliers/SuppliersWhereUniqueInput";

export type ContractUpdateInput = {
  approved?: boolean | null;
  numberField?: string | null;
  pricePerUnit?: number | null;
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
  supplierNumber?: SuppliersWhereUniqueInput | null;
  titlle?: string | null;
};
