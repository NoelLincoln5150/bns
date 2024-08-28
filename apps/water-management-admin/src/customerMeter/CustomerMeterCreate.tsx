import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CustomersTitle } from "../customers/CustomersTitle";
import { MeterTitle } from "../meter/MeterTitle";

export const CustomerMeterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customer.id"
          reference="Customers"
          label="customer_id"
        >
          <SelectInput optionText={CustomersTitle} />
        </ReferenceInput>
        <ReferenceInput source="meterId.id" reference="Meter" label="meter_id">
          <SelectInput optionText={MeterTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
