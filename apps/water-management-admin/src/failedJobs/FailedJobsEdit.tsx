import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const FailedJobsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="connection" source="connection" />
        <TextInput label="exception" source="exception" />
        <DateTimeInput label="failed_at" source="failedAt" />
        <TextInput label="payload" source="payload" />
        <TextInput label="queue" source="queue" />
        <TextInput label="uuid" source="uuid" />
      </SimpleForm>
    </Edit>
  );
};
