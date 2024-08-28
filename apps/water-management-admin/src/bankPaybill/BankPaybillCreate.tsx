import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const BankPaybillCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="deleted_at" source="deletedAt" />
        <TextInput label="enabled" source="enabled" />
        <TextInput label="name" source="name" />
        <TextInput label="paybill" source="paybill" />
      </SimpleForm>
    </Create>
  );
};
