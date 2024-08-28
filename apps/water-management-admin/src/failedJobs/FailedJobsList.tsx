import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FailedJobsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"failed_jobsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="connection" source="connection" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="exception" source="exception" />
        <TextField label="failed_at" source="failedAt" />
        <TextField label="ID" source="id" />
        <TextField label="payload" source="payload" />
        <TextField label="queue" source="queue" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="uuid" source="uuid" />
      </Datagrid>
    </List>
  );
};
