import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const WaterTokensShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
