import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
} from "react-admin";

export const ShortCodesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="consumer_key" source="consumerKey" />
        <TextInput label="consumer_secret" source="consumerSecret" />
        <DateTimeInput label="deleted_at" source="deletedAt" />
        <TextInput label="display_name" source="displayName" />
        <BooleanInput label="enabled" source="enabled" />
        <TextInput label="name" source="name" />
        <DateTimeInput label="registered" source="registered" />
        <TextInput label="shortcode" source="shortcode" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
