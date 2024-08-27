import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BankPaybillList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"bank_paybills"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="deleted_at" source="deletedAt" />
        <TextField label="enabled" source="enabled" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="paybill" source="paybill" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
