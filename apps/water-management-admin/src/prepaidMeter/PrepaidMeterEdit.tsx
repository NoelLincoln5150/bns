import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  SelectInput,
} from "react-admin";

import { AlertTitle } from "../alert/AlertTitle";
import { CommandTitle } from "../command/CommandTitle";
import { MeterDataTitle } from "../meterData/MeterDataTitle";

export const PrepaidMeterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="alerts"
          reference="Alert"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AlertTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="commands"
          reference="Command"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommandTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="meterDataItems"
          reference="MeterData"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MeterDataTitle} />
        </ReferenceArrayInput>
        <TextInput label="meterNumber" source="meterNumber" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
