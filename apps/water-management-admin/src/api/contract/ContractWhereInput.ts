import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { SuppliersWhereUniqueInput } from "../suppliers/SuppliersWhereUniqueInput";

export type ContractWhereInput = {
  approved?: BooleanNullableFilter;
  id?: StringFilter;
  numberField?: StringNullableFilter;
  pricePerUnit?: FloatNullableFilter;
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
    | "Cancelled";
  supplierNumber?: SuppliersWhereUniqueInput;
  titlle?: StringNullableFilter;
};
