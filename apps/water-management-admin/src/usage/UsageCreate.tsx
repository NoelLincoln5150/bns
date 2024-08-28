import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { MeterTitle } from "../meter/MeterTitle";

export const UsageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amountUsed" source="amountUsed" />
        <ReferenceInput source="meter.id" reference="Meter" label="meter">
          <SelectInput optionText={MeterTitle} />
        </ReferenceInput>
        <TextInput label="meterRelation" source="meterRelation" />
        <DateTimeInput label="usageDate" source="usageDate" />
      </SimpleForm>
    </Create>
  );
};
