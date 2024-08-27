import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DOCUMENTS_TITLE_FIELD } from "./DocumentsTitle";
import { DOCUMENTTYPES_TITLE_FIELD } from "../documentTypes/DocumentTypesTitle";

export const DocumentsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="DocumentPayments"
          target="documentId"
          label="document_paymentsItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="document_id"
              source="documents.id"
              reference="Documents"
            >
              <TextField source={DOCUMENTS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
