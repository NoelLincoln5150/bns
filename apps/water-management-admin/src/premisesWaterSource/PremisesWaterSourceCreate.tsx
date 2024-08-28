import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WaterSourcesTitle } from "../waterSources/WaterSourcesTitle";

export const PremisesWaterSourceCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="premises_id" source="premisesId" />
        <ReferenceInput
          source="waterSourceId.id"
          reference="WaterSources"
          label="water_source_id"
        >
          <SelectInput optionText={WaterSourcesTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
