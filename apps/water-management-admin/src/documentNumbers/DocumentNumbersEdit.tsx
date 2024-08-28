import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const DocumentNumbersEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <TextInput label="count" source="count" />
        <TextInput label="deleted_at" source="deletedAt" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <DateTimeInput label="year" source="year" />
      </SimpleForm>
    </Edit>
  );
};
