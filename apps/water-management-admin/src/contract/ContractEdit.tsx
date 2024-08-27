import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  NumberInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { SuppliersTitle } from "../suppliers/SuppliersTitle";

export const ContractEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="approved" source="approved" />
        <TextInput label="number" source="numberField" />
        <NumberInput label="price_per_unit" source="pricePerUnit" />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "Draft", value: "Draft" },
            { label: "PendingApproval", value: "PendingApproval" },
            { label: "Approved", value: "Approved" },
            { label: "Rejected", value: "Rejected" },
            { label: "SentforSignature", value: "SentforSignature" },
            { label: "PartiallySigned", value: "PartiallySigned" },
            { label: "FullySigned", value: "FullySigned" },
            { label: "Active", value: "Active" },
            { label: "OnHold", value: "OnHold" },
            { label: "AmendmentinProgress", value: "AmendmentinProgress" },
            { label: "Expired", value: "Expired" },
            { label: "Terminated", value: "Terminated" },
            { label: "Completed", value: "Completed" },
            { label: "Renewed", value: "Renewed" },
            { label: "Cancelled", value: "Cancelled" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="supplierNumber.id"
          reference="Suppliers"
          label="supplier_number"
        >
          <SelectInput optionText={SuppliersTitle} />
        </ReferenceInput>
        <TextInput label="titlle" source="titlle" />
      </SimpleForm>
    </Edit>
  );
};
