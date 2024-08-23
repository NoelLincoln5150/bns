import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { METER_TITLE_FIELD } from "./MeterTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const MeterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="coordinates" source="coordinates" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="installationDate" source="installationDate" />
        <TextField label="status" source="status" />
        <TextField label="tokenBalance" source="tokenBalance" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField reference="Usage" target="meterId" label="Usages">
          <Datagrid rowClick="show">
            <TextField label="amountUsed" source="amountUsed" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField label="meter" source="meter.id" reference="Meter">
              <TextField source={METER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="meterRelation" source="meterRelation" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="usageDate" source="usageDate" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
