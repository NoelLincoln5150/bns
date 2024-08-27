import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const C2bTransactionsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"c2b_transactionsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="accepted" source="accepted" />
        <TextField label="account_number" source="accountNumber" />
        <TextField label="amount" source="amount" />
        <BooleanField label="completed" source="completed" />
        <BooleanField label="confirmed" source="confirmed" />
        <TextField label="contract_number" source="contractNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="customer_id" source="customerId" />
        <TextField label="deleted_at" source="deletedAt" />
        <TextField label="ID" source="id" />
        <TextField label="message" source="message" />
        <TextField label="payload" source="payload" />
        <TextField label="trans_id" source="transId" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
