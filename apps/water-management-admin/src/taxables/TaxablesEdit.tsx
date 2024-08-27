import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

export const TaxablesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="apply" source="apply" />
        <BooleanInput label="included" source="included" />
        <NumberInput label="rate" source="rate" />
        <TextInput label="tax_id" source="taxId" />
        <TextInput label="taxable_id" source="taxableId" />
        <TextInput label="taxable_type" source="taxableType" />
      </SimpleForm>
    </Edit>
  );
};
