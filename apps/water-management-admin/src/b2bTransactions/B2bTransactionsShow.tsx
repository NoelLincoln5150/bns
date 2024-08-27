import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { CUSTOMERS_TITLE_FIELD } from "../customers/CustomersTitle";
import { PAYMENTACCOUNTS_TITLE_FIELD } from "../paymentAccounts/PaymentAccountsTitle";

export const B2bTransactionsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
