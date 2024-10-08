import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MigrationsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="migration_name" source="migrationName" />
      </SimpleForm>
    </Edit>
  );
};
