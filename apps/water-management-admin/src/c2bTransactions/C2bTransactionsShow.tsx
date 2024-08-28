import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";

export const C2bTransactionsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
