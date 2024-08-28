import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PAYMENTTYPES_TITLE_FIELD } from "../paymentTypes/PaymentTypesTitle";

export const PaymentChannelsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
