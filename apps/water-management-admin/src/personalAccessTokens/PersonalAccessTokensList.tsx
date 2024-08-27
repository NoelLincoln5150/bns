import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PersonalAccessTokensList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"personal_access_tokensItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="abilities" source="abilities" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="expires_at" source="expiresAt" />
        <TextField label="ID" source="id" />
        <TextField label="last_used_at" source="lastUsedAt" />
        <TextField label="name" source="name" />
        <TextField label="token" source="token" />
        <TextField label="tokenable_id" source="tokenableId" />
        <TextField label="tokenable_type" source="tokenableType" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
