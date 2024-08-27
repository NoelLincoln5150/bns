import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { SUPPLIERS_TITLE_FIELD } from "./SuppliersTitle";

export const SuppliersShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="deleted_at" source="deletedAt" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="number" source="numberField" />
        <TextField label="taxNumber" source="taxNumber" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Contract"
          target="supplierNumberId"
          label="contracts"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
