import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ContactCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="active" source="active" />
        <TextInput label="contactable_id" source="contactableId" />
        <TextInput label="contactable_type" source="contactableType" />
        <DateTimeInput label="deleted_at" source="deletedAt" />
        <TextInput label="info" source="info" />
        <TextInput label="name" source="name" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
