import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const LogsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="action" source="action" />
        <TextInput label="deleted_at" source="deletedAt" />
        <NumberInput label="ip_address" source="ipAddress" />
        <TextInput label="message" source="message" />
        <TextInput label="request_payload" source="requestPayload" />
        <TextInput label="resource_id" source="resourceId" />
        <TextInput label="resource_model" source="resourceModel" />
        <DateTimeInput label="update_values" source="updateValues" />
        <ReferenceInput source="userId.id" reference="User" label="user_id">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
