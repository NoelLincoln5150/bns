import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const SuppliersCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="deleted_at" source="deletedAt" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="number" source="numberField" />
        <TextInput label="taxNumber" source="taxNumber" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
