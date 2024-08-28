import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { METERTYPES_TITLE_FIELD } from "../meterTypes/MeterTypesTitle";
import { USAGE_TITLE_FIELD } from "../usage/UsageTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="email_verified_at" source="emailVerifiedAt" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="name" source="name" />
        <TextField label="remember_token" source="rememberToken" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="Logs"
          target="userIdId"
          label="logsItems"
        >
          <Datagrid rowClick="show">
            <TextField label="action" source="action" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="deleted_at" source="deletedAt" />
            <TextField label="ID" source="id" />
            <TextField label="ip_address" source="ipAddress" />
            <TextField label="message" source="message" />
            <TextField label="request_payload" source="requestPayload" />
            <TextField label="resource_id" source="resourceId" />
            <TextField label="resource_model" source="resourceModel" />
            <TextField label="update_values" source="updateValues" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user_id" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Meter" target="userId" label="Meters">
          <Datagrid rowClick="show">
            <TextField label="coordinates" source="coordinates" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="installationDate" source="installationDate" />
            <ReferenceField
              label="meter_type"
              source="metertypes.id"
              reference="MeterTypes"
            >
              <TextField source={METERTYPES_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <TextField label="tokenBalance" source="tokenBalance" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="Usages" source="usage.id" reference="Usage">
              <TextField source={USAGE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Ticket" target="userId" label="Tickets">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="message" source="message" />
            <TextField label="status" source="status" />
            <TextField label="subject" source="subject" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="userRelation" source="userRelation" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
