import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PremisesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="contract_number" source="contractNumber" />
        <TextInput label="county" source="county" />
        <TextInput label="elevation" source="elevation" />
        <TextInput label="latitude" source="latitude" />
        <TextInput label="localAddress" source="location" />
        <TextInput label="longitude" source="longitude" />
        <TextInput label="phone_number" source="phoneNumber" />
        <TextInput label="region" source="region" />
        <TextInput label="subCounty" source="subCounty" />
        <TextInput label="supplier_number" source="supplierNumber" />
        <TextInput label="town" source="town" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
