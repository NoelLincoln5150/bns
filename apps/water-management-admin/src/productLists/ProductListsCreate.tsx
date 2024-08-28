import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProductsTitle } from "../products/ProductsTitle";

export const ProductListsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="barcode" multiline source="barcode" />
        <DateTimeInput label="deleted_at" source="deletedAt" />
        <BooleanInput label="in_stock" source="inStock" />
        <ReferenceArrayInput
          source="productid"
          reference="Products"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductsTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
