import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const WaterTokensEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="c2b_transaction_id" source="c2bTransactionId" />
        <NumberInput label="charges" source="charges" />
        <DateTimeInput label="deleted_at" source="deletedAt" />
        <DateTimeInput label="expired" source="expired" />
        <NumberInput label="liters" source="liters" />
        <NumberInput label="token_amount" source="tokenAmount" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
