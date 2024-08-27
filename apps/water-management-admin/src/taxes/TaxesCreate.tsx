import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const TaxesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="apply" source="apply" />
        <DateTimeInput label="deleted_at" source="deletedAt" />
        <NumberInput label="fixed" source="fixed" />
        <TextInput label="name" source="name" />
        <NumberInput label="rate" source="rate" />
      </SimpleForm>
    </Create>
  );
};
