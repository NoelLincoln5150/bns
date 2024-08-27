import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PRODUCTS_TITLE_FIELD } from "./ProductsTitle";

export const ProductsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="barcode" source="barcode" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="deleted_at" source="deletedAt" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="is_serialized" source="isSerialized" />
        <TextField label="low_stock_warning" source="lowStockWarning" />
        <TextField
          label="minimum_order_quantity"
          source="minimumOrderQuantity"
        />
        <TextField label="name" source="name" />
        <TextField label="price" source="price" />
        <TextField label="quantity" source="quantity" />
        <TextField label="stock_take_period" source="stockTakePeriod" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CategoryProduct"
          target="productIId"
          label="category_products"
        >
          <Datagrid rowClick="show">
            <TextField label="category_id" source="categoryId" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="product_id"
              source="products.id"
              reference="Products"
            >
              <TextField source={PRODUCTS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
