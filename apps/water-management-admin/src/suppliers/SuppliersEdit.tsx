import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { ContractTitle } from "../contract/ContractTitle";

export const SuppliersEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="contracts"
          reference="Contract"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContractTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="deleted_at" source="deletedAt" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="number" source="numberField" />
        <TextInput label="taxNumber" source="taxNumber" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
