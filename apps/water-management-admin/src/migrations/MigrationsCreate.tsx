import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MigrationsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="migration_name" source="migrationName" />
      </SimpleForm>
    </Create>
  );
};
