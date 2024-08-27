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

import { METERTYPES_TITLE_FIELD } from "./MeterTypesTitle";
import { USAGE_TITLE_FIELD } from "../usage/UsageTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const MeterTypesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Meter"
          target="meterTypeId"
          label="Meters"
        >
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
      </SimpleShowLayout>
    </Show>
  );
};
