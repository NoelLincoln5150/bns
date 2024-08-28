import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PAYMENTTYPES_TITLE_FIELD } from "./PaymentTypesTitle";

export const PaymentTypesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="can_settle" source="canSettle" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="deleted_at" source="deletedAt" />
        <TextField label="display_name" source="displayName" />
        <TextField label="enabled" source="enabled" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="PaymentChannels"
          target="paymentTypeId"
          label="payment_channelsItems"
        >
          <Datagrid rowClick="show">
            <TextField label="account_number" source="accountNumber" />
            <TextField label="channel" source="channel" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="deleted_at" source="deletedAt" />
            <TextField label="enabled" source="enabled" />
            <TextField label="ID" source="id" />
            <TextField label="payable_id" source="payableId" />
            <TextField label="payable_type" source="payableType" />
            <ReferenceField
              label="payment_type_id"
              source="paymenttypes.id"
              reference="PaymentTypes"
            >
              <TextField source={PAYMENTTYPES_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
