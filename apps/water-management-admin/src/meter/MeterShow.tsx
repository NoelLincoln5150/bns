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

import { CUSTOMERS_TITLE_FIELD } from "../customers/CustomersTitle";
import { METER_TITLE_FIELD } from "./MeterTitle";
import { METERTYPES_TITLE_FIELD } from "../meterTypes/MeterTypesTitle";
import { USAGE_TITLE_FIELD } from "../usage/UsageTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const MeterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="CustomerMeter"
          target="meterIdId"
          label="customer_meters"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="customer_id"
              source="customers.id"
              reference="Customers"
            >
              <TextField source={CUSTOMERS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="meter_id"
              source="meter.id"
              reference="Meter"
            >
              <TextField source={METER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
