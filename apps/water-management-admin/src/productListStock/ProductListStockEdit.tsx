import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ProductListStockEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="product_list_id" source="productListId" />
        <TextInput label="stock_id" source="stockId" />
      </SimpleForm>
    </Edit>
  );
};
