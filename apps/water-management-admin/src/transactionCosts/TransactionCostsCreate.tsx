import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const TransactionCostsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="fee" source="fee" />
        <NumberInput label="max" source="max" />
        <NumberInput label="min" source="min" />
      </SimpleForm>
    </Create>
  );
};
