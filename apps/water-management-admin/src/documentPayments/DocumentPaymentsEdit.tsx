import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DocumentsTitle } from "../documents/DocumentsTitle";
import { PaymentTypesTitle } from "../paymentTypes/PaymentTypesTitle";

export const DocumentPaymentsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="document.id"
          reference="Documents"
          label="document_id"
        >
          <SelectInput optionText={DocumentsTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="paymentType"
          reference="PaymentTypes"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTypesTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
