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

import { CUSTOMERS_TITLE_FIELD } from "../customers/CustomersTitle";
import { PAYMENTACCOUNTS_TITLE_FIELD } from "./PaymentAccountsTitle";

export const PaymentAccountsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="B2bTransactions"
          target="paymentAccountId"
          label="b2b_transactionsItems"
        >
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="customer"
              source="customers.id"
              reference="Customers"
            >
              <TextField source={CUSTOMERS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="paymentAccount"
              source="paymentaccounts.id"
              reference="PaymentAccounts"
            >
              <TextField source={PAYMENTACCOUNTS_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <TextField label="transactionDate" source="transactionDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
