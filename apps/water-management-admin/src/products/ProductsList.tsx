import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ProductsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"productsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
