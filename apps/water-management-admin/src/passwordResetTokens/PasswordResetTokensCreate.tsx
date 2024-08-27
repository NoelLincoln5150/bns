import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PasswordResetTokensCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="token" source="token" />
      </SimpleForm>
    </Create>
  );
};
