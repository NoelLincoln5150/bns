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
import { PREPAIDMETER_TITLE_FIELD } from "../prepaidMeter/PrepaidMeterTitle";

export const CommandList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Commands"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="commandType" source="commandType" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="parameter" source="parameter" />
        <ReferenceField
          label="PrepaidMeter"
          source="prepaidmeter.id"
          reference="PrepaidMeter"
        >
          <TextField source={PREPAIDMETER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="sentAt" source="sentAt" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
