import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DocumentsTitle } from "../documents/DocumentsTitle";

export const DocumentTypesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
