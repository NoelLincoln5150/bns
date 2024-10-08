import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CategoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="deleted_at" source="deletedAt" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
