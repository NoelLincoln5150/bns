import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const RevenueSharesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput
          label="apply_transaction_fee"
          source="applyTransactionFee"
        />
        <BooleanInput label="approved" source="approved" />
        <TextInput label="contract_number" source="contractNumber" />
        <DateTimeInput label="deleted_at" source="deletedAt" />
        <BooleanInput label="is_charge" source="isCharge" />
        <NumberInput step={1} label="number" source="numberField" />
        <TextInput label="payment_channel_id" source="paymentChannelId" />
        <NumberInput label="share" source="share" />
      </SimpleForm>
    </Create>
  );
};
