import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const BankPaybillEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="deleted_at" source="deletedAt" />
        <TextInput label="enabled" source="enabled" />
        <TextInput label="name" source="name" />
        <TextInput label="paybill" source="paybill" />
      </SimpleForm>
    </Edit>
  );
};
