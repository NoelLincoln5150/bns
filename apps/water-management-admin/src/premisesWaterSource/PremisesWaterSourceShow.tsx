import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { WATERSOURCES_TITLE_FIELD } from "../waterSources/WaterSourcesTitle";

export const PremisesWaterSourceShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
