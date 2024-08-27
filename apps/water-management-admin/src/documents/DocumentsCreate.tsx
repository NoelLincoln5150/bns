import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { DocumentPaymentsTitle } from "../documentPayments/DocumentPaymentsTitle";
import { DocumentTypesTitle } from "../documentTypes/DocumentTypesTitle";

export const DocumentsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="deleted_at" source="deletedAt" />
        <ReferenceArrayInput
          source="documentPaymentsItems"
          reference="DocumentPayments"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DocumentPaymentsTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="documentType.id"
          reference="DocumentTypes"
          label="document_type_id"
        >
          <SelectInput optionText={DocumentTypesTitle} />
        </ReferenceInput>
        <TextInput label="documentable_id" source="documentableId" />
        <TextInput label="documentable_type" source="documentableType" />
        <TextInput label="number" source="numberField" />
        <BooleanInput label="paid" source="paid" />
      </SimpleForm>
    </Create>
  );
};
