import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { CustomersTitle } from "../customers/CustomersTitle";
import { PaymentAccountsTitle } from "../paymentAccounts/PaymentAccountsTitle";

export const B2bTransactionsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput
          source="customer.id"
          reference="Customers"
          label="customer"
        >
          <SelectInput optionText={CustomersTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="paymentAccount.id"
          reference="PaymentAccounts"
          label="paymentAccount"
        >
          <SelectInput optionText={PaymentAccountsTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="transactionDate" source="transactionDate" />
      </SimpleForm>
    </Edit>
  );
};
