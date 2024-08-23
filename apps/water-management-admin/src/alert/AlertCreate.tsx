import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";
import { PrepaidMeterTitle } from "../prepaidMeter/PrepaidMeterTitle";

export const AlertCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="level"
          label="level"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="message" multiline source="message" />
        <ReferenceInput
          source="prepaidMeter.id"
          reference="PrepaidMeter"
          label="PrepaidMeter"
        >
          <SelectInput optionText={PrepaidMeterTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
