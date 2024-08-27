import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

export const OtpsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="identifier" source="identifier" />
        <TextInput label="token" source="token" />
        <BooleanInput label="valid" source="valid" />
        <NumberInput step={1} label="validity" source="validity" />
      </SimpleForm>
    </Create>
  );
};
