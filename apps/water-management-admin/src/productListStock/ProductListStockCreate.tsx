import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ProductListStockCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="product_list_id" source="productListId" />
        <TextInput label="stock_id" source="stockId" />
      </SimpleForm>
    </Create>
  );
};
