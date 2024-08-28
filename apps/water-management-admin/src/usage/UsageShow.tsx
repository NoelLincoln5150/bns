import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { METER_TITLE_FIELD } from "../meter/MeterTitle";

export const UsageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amountUsed" source="amountUsed" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="meter" source="meter.id" reference="Meter">
          <TextField source={METER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="meterRelation" source="meterRelation" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="usageDate" source="usageDate" />
      </SimpleShowLayout>
    </Show>
  );
};
