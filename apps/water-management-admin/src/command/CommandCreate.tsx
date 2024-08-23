import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  ReferenceInput,
  DateTimeInput,
} from "react-admin";

import { PrepaidMeterTitle } from "../prepaidMeter/PrepaidMeterTitle";

export const CommandCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="commandType"
          label="commandType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="parameter" source="parameter" />
        <ReferenceInput
          source="prepaidMeter.id"
          reference="PrepaidMeter"
          label="PrepaidMeter"
        >
          <SelectInput optionText={PrepaidMeterTitle} />
        </ReferenceInput>
        <DateTimeInput label="sentAt" source="sentAt" />
      </SimpleForm>
    </Create>
  );
};
