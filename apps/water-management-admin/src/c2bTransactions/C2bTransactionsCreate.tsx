import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const C2bTransactionsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="accepted" source="accepted" />
        <TextInput label="account_number" source="accountNumber" />
        <NumberInput label="amount" source="amount" />
        <BooleanInput label="completed" source="completed" />
        <BooleanInput label="confirmed" source="confirmed" />
        <TextInput label="contract_number" source="contractNumber" />
        <NumberInput step={1} label="customer_id" source="customerId" />
        <DateTimeInput label="deleted_at" source="deletedAt" />
        <TextInput label="message" multiline source="message" />
        <div />
        <TextInput label="trans_id" source="transId" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
