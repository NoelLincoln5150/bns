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

import { PREPAIDMETER_TITLE_FIELD } from "./PrepaidMeterTitle";

export const PrepaidMeterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="meterNumber" source="meterNumber" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Alert"
          target="prepaidMeterId"
          label="Alerts"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="level" source="level" />
            <TextField label="message" source="message" />
            <ReferenceField
              label="PrepaidMeter"
              source="prepaidmeter.id"
              reference="PrepaidMeter"
            >
              <TextField source={PREPAIDMETER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Command"
          target="prepaidMeterId"
          label="Commands"
        >
          <Datagrid rowClick="show">
            <TextField label="commandType" source="commandType" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="parameter" source="parameter" />
            <ReferenceField
              label="PrepaidMeter"
              source="prepaidmeter.id"
              reference="PrepaidMeter"
            >
              <TextField source={PREPAIDMETER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="sentAt" source="sentAt" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MeterData"
          target="prepaidMeterId"
          label="MeterDataItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="PrepaidMeter"
              source="prepaidmeter.id"
              reference="PrepaidMeter"
            >
              <TextField source={PREPAIDMETER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="timestamp" source="timestamp" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="value" source="value" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
