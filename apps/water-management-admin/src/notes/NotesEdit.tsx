import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const NotesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="body" source="body" />
        <TextInput label="deleted_at" source="deletedAt" />
        <BooleanInput label="mutable" source="mutable" />
        <TextInput label="notable_id" source="notableId" />
        <TextInput label="notable_type" source="notableType" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
