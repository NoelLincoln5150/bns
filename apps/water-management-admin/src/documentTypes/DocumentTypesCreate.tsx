import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DocumentsTitle } from "../documents/DocumentsTitle";

export const DocumentTypesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <DateTimeInput label="deleted_at" source="deletedAt" />
        <ReferenceArrayInput
          source="documentsItems"
          reference="Documents"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DocumentsTitle} />
        </ReferenceArrayInput>
        <TextInput label="movement" source="movement" />
        <TextInput label="name" source="name" />
        <TextInput label="require_payment" source="requirePayment" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
