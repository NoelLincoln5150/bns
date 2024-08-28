import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";

import { SUPPLIERS_TITLE_FIELD } from "../suppliers/SuppliersTitle";

export const ContractShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="approved" source="approved" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="number" source="numberField" />
        <TextField label="price_per_unit" source="pricePerUnit" />
        <TextField label="status" source="status" />
        <ReferenceField
          label="supplier_number"
          source="suppliers.id"
          reference="Suppliers"
        >
          <TextField source={SUPPLIERS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="titlle" source="titlle" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
