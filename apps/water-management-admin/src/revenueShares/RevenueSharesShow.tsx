import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  TextField,
  DateField,
} from "react-admin";

export const RevenueSharesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
