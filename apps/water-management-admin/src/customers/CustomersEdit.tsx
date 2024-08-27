import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { B2bTransactionsTitle } from "../b2bTransactions/B2bTransactionsTitle";

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
      </SimpleForm>
    </Edit>
  );
};
