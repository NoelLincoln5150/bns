import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PaymentTypesTitle } from "../paymentTypes/PaymentTypesTitle";

export const PaymentChannelsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="account_number" source="accountNumber" />
        <TextInput label="channel" source="channel" />
        <TextInput label="deleted_at" source="deletedAt" />
        <TextInput label="enabled" source="enabled" />
        <TextInput label="payable_id" source="payableId" />
        <TextInput label="payable_type" source="payableType" />
        <ReferenceInput
          source="paymentType.id"
          reference="PaymentTypes"
          label="payment_type_id"
        >
          <SelectInput optionText={PaymentTypesTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
