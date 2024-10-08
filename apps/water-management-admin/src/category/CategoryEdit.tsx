import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CategoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="deleted_at" source="deletedAt" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
