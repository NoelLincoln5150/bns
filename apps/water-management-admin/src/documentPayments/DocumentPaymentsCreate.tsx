import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DocumentsTitle } from "../documents/DocumentsTitle";
import { PaymentTypesTitle } from "../paymentTypes/PaymentTypesTitle";

export const DocumentPaymentsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
