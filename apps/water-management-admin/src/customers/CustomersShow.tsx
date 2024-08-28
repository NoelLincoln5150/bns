import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CUSTOMERS_TITLE_FIELD } from "./CustomersTitle";
import { PAYMENTACCOUNTS_TITLE_FIELD } from "../paymentAccounts/PaymentAccountsTitle";
import { METER_TITLE_FIELD } from "../meter/MeterTitle";

export const CustomersShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="deleted_at" source="deletedAt" />
        <TextField label="email" source="email" />
        <TextField label="hash" source="hash" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="phone_number" source="phoneNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="B2bTransactions"
          target="customerId"
          label="b2b_transactionsItems"
        >
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <TextField label="c2b_transaction_id" source="c2bTransactionId" />
            <TextField label="completed" source="completed" />
            <TextField label="confirmed" source="confirmed" />
            <TextField label="contract_number" source="contractNumber" />
            <TextField label="conversation_id" source="conversationId" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="customer"
              source="customers.id"
              reference="Customers"
            >
              <TextField source={CUSTOMERS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="deleted_at" source="deletedAt" />
            <TextField label="ID" source="id" />
            <TextField label="initiated" source="initiated" />
            <TextField label="initiated_payload" source="initiatedPayload" />
            <TextField label="message" source="message" />
            <TextField label="payload" source="payload" />
            <ReferenceField
              label="paymentAccount"
              source="paymentaccounts.id"
              reference="PaymentAccounts"
            >
              <TextField source={PAYMENTACCOUNTS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="payment_channel_id" source="paymentChannelId" />
            <TextField label="share" source="share" />
            <TextField label="status" source="status" />
            <TextField label="transactionDate" source="transactionDate" />
            <TextField label="transaction_fee" source="transactionFee" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CustomerMeter"
          target="customerId"
          label="customer_meters"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="customer_id"
              source="customers.id"
              reference="Customers"
            >
              <TextField source={CUSTOMERS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="meter_id"
              source="meter.id"
              reference="Meter"
            >
              <TextField source={METER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
