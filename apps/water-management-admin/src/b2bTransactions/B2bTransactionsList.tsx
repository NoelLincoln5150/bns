import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CUSTOMERS_TITLE_FIELD } from "../customers/CustomersTitle";
import { PAYMENTACCOUNTS_TITLE_FIELD } from "../paymentAccounts/PaymentAccountsTitle";

export const B2bTransactionsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"b2b_transactionsItems"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
