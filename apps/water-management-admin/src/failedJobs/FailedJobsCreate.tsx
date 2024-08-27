import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const FailedJobsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="connection" source="connection" />
        <TextInput label="exception" source="exception" />
        <DateTimeInput label="failed_at" source="failedAt" />
        <TextInput label="payload" source="payload" />
        <TextInput label="queue" source="queue" />
        <TextInput label="uuid" source="uuid" />
      </SimpleForm>
    </Create>
  );
};
