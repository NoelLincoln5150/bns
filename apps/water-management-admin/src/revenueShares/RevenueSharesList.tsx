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

export const RevenueSharesList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"revenue_sharesItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField
          label="apply_transaction_fee"
          source="applyTransactionFee"
        />
        <BooleanField label="approved" source="approved" />
        <TextField label="contract_number" source="contractNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="deleted_at" source="deletedAt" />
        <TextField label="ID" source="id" />
        <BooleanField label="is_charge" source="isCharge" />
        <TextField label="number" source="numberField" />
        <TextField label="payment_channel_id" source="paymentChannelId" />
        <TextField label="share" source="share" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
