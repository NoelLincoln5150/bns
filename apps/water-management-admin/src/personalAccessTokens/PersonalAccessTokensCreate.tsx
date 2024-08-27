import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PersonalAccessTokensCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="abilities" source="abilities" />
        <TextInput label="expires_at" source="expiresAt" />
        <TextInput label="last_used_at" source="lastUsedAt" />
        <TextInput label="name" source="name" />
        <TextInput label="token" source="token" />
        <TextInput label="tokenable_id" source="tokenableId" />
        <TextInput label="tokenable_type" source="tokenableType" />
      </SimpleForm>
    </Create>
  );
};
