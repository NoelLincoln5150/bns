import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PremisesWaterSourceTitle } from "../premisesWaterSource/PremisesWaterSourceTitle";

export const WaterSourcesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="county" source="county" />
        <DateTimeInput label="deleted_at" source="deletedAt" />
        <NumberInput label="elevation" source="elevation" />
        <NumberInput label="latitude" source="latitude" />
        <TextInput label="localAddress" multiline source="localAddress" />
        <NumberInput label="longitude" source="longitude" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="number" source="numberField" />
        <ReferenceArrayInput
          source="premisesWaterSources"
          reference="PremisesWaterSource"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PremisesWaterSourceTitle} />
        </ReferenceArrayInput>
        <TextInput label="region" source="region" />
        <TextInput label="subCounty" source="subCounty" />
        <TextInput label="supplier_number" source="supplierNumber" />
        <TextInput label="town" source="town" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
