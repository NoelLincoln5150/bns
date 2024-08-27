import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
} from "react-admin";

export const OtpsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="identifier" source="identifier" />
        <TextField label="token" source="token" />
        <DateField source="updatedAt" label="Updated At" />
        <BooleanField label="valid" source="valid" />
        <TextField label="validity" source="validity" />
      </SimpleShowLayout>
    </Show>
  );
};
