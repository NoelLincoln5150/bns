import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const TransactionCostsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="fee" source="fee" />
        <NumberInput label="max" source="max" />
        <NumberInput label="min" source="min" />
      </SimpleForm>
    </Edit>
  );
};
