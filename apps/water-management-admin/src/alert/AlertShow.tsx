import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PREPAIDMETER_TITLE_FIELD } from "../prepaidMeter/PrepaidMeterTitle";

export const AlertShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
