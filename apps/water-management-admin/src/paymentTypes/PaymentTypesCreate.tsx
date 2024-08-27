import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DocumentPaymentsTitle } from "../documentPayments/DocumentPaymentsTitle";
import { PaymentChannelsTitle } from "../paymentChannels/PaymentChannelsTitle";

export const PaymentTypesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="can_settle" source="canSettle" />
        <TextInput label="deleted_at" source="deletedAt" />
        <TextInput label="display_name" source="displayName" />
        <ReferenceArrayInput
          source="documentPaymentsItems"
          reference="DocumentPayments"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DocumentPaymentsTitle} />
        </ReferenceArrayInput>
        <TextInput label="enabled" source="enabled" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="paymentChannelsItems"
          reference="PaymentChannels"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentChannelsTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
