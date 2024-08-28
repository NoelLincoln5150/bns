import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const NotesList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"notesItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="body" source="body" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="deleted_at" source="deletedAt" />
        <TextField label="ID" source="id" />
        <BooleanField label="mutable" source="mutable" />
        <TextField label="notable_id" source="notableId" />
        <TextField label="notable_type" source="notableType" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
