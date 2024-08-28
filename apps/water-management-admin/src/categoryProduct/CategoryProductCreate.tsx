import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductsTitle } from "../products/ProductsTitle";

export const CategoryProductCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="category_id" source="categoryId" />
        <ReferenceInput
          source="productI.id"
          reference="Products"
          label="product_id"
        >
          <SelectInput optionText={ProductsTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
