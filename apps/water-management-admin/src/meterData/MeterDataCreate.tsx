import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { PrepaidMeterTitle } from "../prepaidMeter/PrepaidMeterTitle";

export const MeterDataCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="prepaidMeter.id"
          reference="PrepaidMeter"
          label="PrepaidMeter"
        >
          <SelectInput optionText={PrepaidMeterTitle} />
        </ReferenceInput>
        <DateTimeInput label="timestamp" source="timestamp" />
        <NumberInput label="value" source="value" />
      </SimpleForm>
    </Create>
  );
};
