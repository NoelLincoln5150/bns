import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductsTitle } from "../products/ProductsTitle";

export const CategoryProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
