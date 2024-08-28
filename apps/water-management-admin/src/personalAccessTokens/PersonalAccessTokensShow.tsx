import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PersonalAccessTokensShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="abilities" source="abilities" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="expires_at" source="expiresAt" />
        <TextField label="ID" source="id" />
        <TextField label="last_used_at" source="lastUsedAt" />
        <TextField label="name" source="name" />
        <TextField label="token" source="token" />
        <TextField label="tokenable_id" source="tokenableId" />
        <TextField label="tokenable_type" source="tokenableType" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
