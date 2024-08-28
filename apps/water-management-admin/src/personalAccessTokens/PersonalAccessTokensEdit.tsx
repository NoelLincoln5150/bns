import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PersonalAccessTokensEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="abilities" source="abilities" />
        <TextInput label="expires_at" source="expiresAt" />
        <TextInput label="last_used_at" source="lastUsedAt" />
        <TextInput label="name" source="name" />
        <TextInput label="token" source="token" />
        <TextInput label="tokenable_id" source="tokenableId" />
        <TextInput label="tokenable_type" source="tokenableType" />
      </SimpleForm>
    </Edit>
  );
};
