import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";
import { PrepaidMeterTitle } from "../prepaidMeter/PrepaidMeterTitle";

export const AlertEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="level"
          label="level"
          choices={[
            { label: "INFO", value: "Info" },
            { label: "WARNING", value: "Warning" },
            { label: "URGENT", value: "Urgent" },
            { label: "ERROR", value: "Error" },
            { label: "CRITICAL", value: "Critical" },
          ]}
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
    </Edit>
  );
};
