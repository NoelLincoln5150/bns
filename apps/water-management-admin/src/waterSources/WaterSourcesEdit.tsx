import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PremisesWaterSourceTitle } from "../premisesWaterSource/PremisesWaterSourceTitle";

export const WaterSourcesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
