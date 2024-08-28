import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { METER_TITLE_FIELD } from "../meter/MeterTitle";

export const UsageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Usages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="amountUsed" source="amountUsed" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="meter" source="meter.id" reference="Meter">
          <TextField source={METER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="meterRelation" source="meterRelation" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="usageDate" source="usageDate" />
      </Datagrid>
    </List>
  );
};
