import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const WaterSourcesList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"water_sourcesItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="county" source="county" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="deleted_at" source="deletedAt" />
        <TextField label="elevation" source="elevation" />
        <TextField label="ID" source="id" />
        <TextField label="latitude" source="latitude" />
        <TextField label="localAddress" source="localAddress" />
        <TextField label="longitude" source="longitude" />
        <TextField label="name" source="name" />
        <TextField label="number" source="numberField" />
        <TextField label="region" source="region" />
        <TextField label="subCounty" source="subCounty" />
        <TextField label="supplier_number" source="supplierNumber" />
        <TextField label="town" source="town" />
        <TextField label="type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
