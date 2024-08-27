import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

export const OtpsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="identifier" source="identifier" />
        <TextInput label="token" source="token" />
        <BooleanInput label="valid" source="valid" />
        <NumberInput step={1} label="validity" source="validity" />
      </SimpleForm>
    </Edit>
  );
};
