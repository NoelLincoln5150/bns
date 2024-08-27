import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { WATERSOURCES_TITLE_FIELD } from "../waterSources/WaterSourcesTitle";

export const PremisesWaterSourceList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"premises_water_sources"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="premises_id" source="premisesId" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="water_source_id"
          source="watersources.id"
          reference="WaterSources"
        >
          <TextField source={WATERSOURCES_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
