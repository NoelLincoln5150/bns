import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const WaterTokensCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="c2b_transaction_id" source="c2bTransactionId" />
        <NumberInput label="charges" source="charges" />
        <DateTimeInput label="deleted_at" source="deletedAt" />
        <DateTimeInput label="expired" source="expired" />
        <NumberInput label="liters" source="liters" />
        <NumberInput label="token_amount" source="tokenAmount" />
        <div />
      </SimpleForm>
    </Create>
  );
};
