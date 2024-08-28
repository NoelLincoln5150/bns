import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PREPAIDMETER_TITLE_FIELD } from "../prepaidMeter/PrepaidMeterTitle";

export const CommandShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
