import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { DOCUMENTTYPES_TITLE_FIELD } from "./DocumentTypesTitle";

export const DocumentTypesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="deleted_at" source="deletedAt" />
        <TextField label="ID" source="id" />
        <TextField label="movement" source="movement" />
        <TextField label="name" source="name" />
        <TextField label="require_payment" source="requirePayment" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Documents"
          target="documentTypeId"
          label="documentsItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="deleted_at" source="deletedAt" />
            <ReferenceField
              label="document_type_id"
              source="documenttypes.id"
              reference="DocumentTypes"
            >
              <TextField source={DOCUMENTTYPES_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="documentable_id" source="documentableId" />
            <TextField label="documentable_type" source="documentableType" />
            <TextField label="ID" source="id" />
            <TextField label="number" source="numberField" />
            <BooleanField label="paid" source="paid" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
