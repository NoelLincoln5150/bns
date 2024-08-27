import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const DocumentNumbersCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <TextInput label="count" source="count" />
        <TextInput label="deleted_at" source="deletedAt" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <DateTimeInput label="year" source="year" />
      </SimpleForm>
    </Create>
  );
};
