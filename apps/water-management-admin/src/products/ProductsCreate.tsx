import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

import { CategoryProductTitle } from "../categoryProduct/CategoryProductTitle";
import { ProductListsTitle } from "../productLists/ProductListsTitle";

export const ProductsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="barcode" multiline source="barcode" />
        <ReferenceArrayInput
          source="categoryProducts"
          reference="CategoryProduct"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CategoryProductTitle} />
        </ReferenceArrayInput>
        <TextInput label="deleted_at" source="deletedAt" />
        <TextInput label="description" multiline source="description" />
        <BooleanInput label="is_serialized" source="isSerialized" />
        <TextInput label="low_stock_warning" source="lowStockWarning" />
        <NumberInput
          step={1}
          label="minimum_order_quantity"
          source="minimumOrderQuantity"
        />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <ReferenceArrayInput
          source="productListsItems"
          reference="ProductLists"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductListsTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="quantity" source="quantity" />
        <TextInput label="stock_take_period" source="stockTakePeriod" />
      </SimpleForm>
    </Create>
  );
};
