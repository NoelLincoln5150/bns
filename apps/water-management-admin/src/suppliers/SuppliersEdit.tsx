import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

export const SuppliersEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="deleted_at" source="deletedAt" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="number" source="numberField" />
        <TextInput label="taxNumber" source="taxNumber" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
