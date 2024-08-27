import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const FailedJobsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="connection" source="connection" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="exception" source="exception" />
        <TextField label="failed_at" source="failedAt" />
        <TextField label="ID" source="id" />
        <TextField label="payload" source="payload" />
        <TextField label="queue" source="queue" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="uuid" source="uuid" />
      </SimpleShowLayout>
    </Show>
  );
};
