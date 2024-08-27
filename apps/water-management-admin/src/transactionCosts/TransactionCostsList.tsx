import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TransactionCostsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"transaction_costsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="fee" source="fee" />
        <TextField label="ID" source="id" />
        <TextField label="max" source="max" />
        <TextField label="min" source="min" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
