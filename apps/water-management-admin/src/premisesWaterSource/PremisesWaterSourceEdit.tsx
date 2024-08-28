import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WaterSourcesTitle } from "../waterSources/WaterSourcesTitle";

export const PremisesWaterSourceEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
