import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { WATERSOURCES_TITLE_FIELD } from "./WaterSourcesTitle";

export const WaterSourcesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="county" source="county" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="deleted_at" source="deletedAt" />
        <TextField label="elevation" source="elevation" />
        <TextField label="ID" source="id" />
        <TextField label="latitude" source="latitude" />
        <TextField label="localAddress" source="localAddress" />
        <TextField label="longitude" source="longitude" />
        <TextField label="name" source="name" />
        <TextField label="number" source="numberField" />
        <TextField label="region" source="region" />
        <TextField label="subCounty" source="subCounty" />
        <TextField label="supplier_number" source="supplierNumber" />
        <TextField label="town" source="town" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PremisesWaterSource"
          target="waterSourceIdId"
          label="premises_water_sources"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="premises_id" source="premisesId" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="water_source_id"
              source="watersources.id"
              reference="WaterSources"
            >
              <TextField source={WATERSOURCES_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
