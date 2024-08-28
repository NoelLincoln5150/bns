import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { B2bTransactionsTitle } from "../b2bTransactions/B2bTransactionsTitle";
import { CustomerMeterTitle } from "../customerMeter/CustomerMeterTitle";

export const CustomersEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="b2bTransactionsItems"
          reference="B2bTransactions"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={B2bTransactionsTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="customerMeters"
          reference="CustomerMeter"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CustomerMeterTitle} />
        </ReferenceArrayInput>
        <TextInput label="deleted_at" source="deletedAt" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="hash" source="hash" />
        <TextInput label="name" source="name" />
        <TextInput label="phone_number" source="phoneNumber" />
      </SimpleForm>
    </Edit>
  );
};
