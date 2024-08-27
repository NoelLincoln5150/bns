import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const TaxesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="apply" source="apply" />
        <DateTimeInput label="deleted_at" source="deletedAt" />
        <NumberInput label="fixed" source="fixed" />
        <TextInput label="name" source="name" />
        <NumberInput label="rate" source="rate" />
      </SimpleForm>
    </Edit>
  );
};
