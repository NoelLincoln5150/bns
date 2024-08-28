import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ContactEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="active" source="active" />
        <TextInput label="contactable_id" source="contactableId" />
        <TextInput label="contactable_type" source="contactableType" />
        <DateTimeInput label="deleted_at" source="deletedAt" />
        <TextInput label="info" source="info" />
        <TextInput label="name" source="name" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
