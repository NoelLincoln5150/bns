import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ContractPartyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="deleted_at" source="deletedAt" />
        <TextInput label="name" source="name" />
        <TextInput label="number" source="numberField" />
        <TextInput label="taxNumber" source="taxNumber" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
