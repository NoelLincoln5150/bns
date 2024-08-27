import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const NotesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="body" source="body" />
        <TextInput label="deleted_at" source="deletedAt" />
        <BooleanInput label="mutable" source="mutable" />
        <TextInput label="notable_id" source="notableId" />
        <TextInput label="notable_type" source="notableType" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
