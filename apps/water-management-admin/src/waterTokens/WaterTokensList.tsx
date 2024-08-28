import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const WaterTokensList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"water_tokensItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="c2b_transaction_id" source="c2bTransactionId" />
        <TextField label="charges" source="charges" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="deleted_at" source="deletedAt" />
        <TextField label="expired" source="expired" />
        <TextField label="ID" source="id" />
        <TextField label="liters" source="liters" />
        <TextField label="token_amount" source="tokenAmount" />
        <TextField label="token_requests" source="tokenRequests" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
