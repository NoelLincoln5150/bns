import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

import { B2bTransactionsTitle } from "../b2bTransactions/B2bTransactionsTitle";

export const PaymentAccountsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="b2bTransactionsItems"
          reference="B2bTransactions"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={B2bTransactionsTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="deleted_at" source="deletedAt" />
        <BooleanInput label="enabled" source="enabled" />
      </SimpleForm>
    </Create>
  );
};
