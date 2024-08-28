import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CustomersTitle } from "../customers/CustomersTitle";
import { PaymentAccountsTitle } from "../paymentAccounts/PaymentAccountsTitle";

export const B2bTransactionsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <TextInput label="c2b_transaction_id" source="c2bTransactionId" />
        <DateTimeInput label="completed" source="completed" />
        <DateTimeInput label="confirmed" source="confirmed" />
        <TextInput label="contract_number" source="contractNumber" />
        <TextInput label="conversation_id" source="conversationId" />
        <ReferenceInput
          source="customer.id"
          reference="Customers"
          label="customer"
        >
          <SelectInput optionText={CustomersTitle} />
        </ReferenceInput>
        <DateTimeInput label="deleted_at" source="deletedAt" />
        <DateTimeInput label="initiated" source="initiated" />
        <div />
        <TextInput label="message" multiline source="message" />
        <div />
        <ReferenceInput
          source="paymentAccount.id"
          reference="PaymentAccounts"
          label="paymentAccount"
        >
          <SelectInput optionText={PaymentAccountsTitle} />
        </ReferenceInput>
        <TextInput label="payment_channel_id" source="paymentChannelId" />
        <NumberInput label="share" source="share" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="transactionDate" source="transactionDate" />
        <NumberInput label="transaction_fee" source="transactionFee" />
      </SimpleForm>
    </Edit>
  );
};
