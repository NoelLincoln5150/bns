import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { MeterTitle } from "../meter/MeterTitle";

export const UsageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amountUsed" source="amountUsed" />
        <ReferenceInput source="meter.id" reference="Meter" label="meter">
          <SelectInput optionText={MeterTitle} />
        </ReferenceInput>
        <TextInput label="meterRelation" source="meterRelation" />
        <DateTimeInput label="usageDate" source="usageDate" />
      </SimpleForm>
    </Edit>
  );
};
