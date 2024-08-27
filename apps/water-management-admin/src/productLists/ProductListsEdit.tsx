import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProductsTitle } from "../products/ProductsTitle";

export const ProductListsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
