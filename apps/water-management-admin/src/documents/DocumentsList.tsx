import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { DOCUMENTTYPES_TITLE_FIELD } from "../documentTypes/DocumentTypesTitle";

export const DocumentsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"documentsItems"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
